import { firebase, FieldValue } from "../lib/firebase";

export async function doesUserNameExist(username: string) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

export const getUserByUID = async (uid: string) => {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", uid)
    .get();

  const activeUser = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return { activeUser };
};

interface UserType {
  username: string;
  fullName: string;
  userId: string;
  docId: string;
}

type funcType = (
  userId: string,
  folowing: string[]
) => Promise<UserType[] | []>;

export const getUserSuggestionsByUserId: funcType = async (
  userId,
  following
) => {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "!=", userId)
    .limit(10)
    .get();
  const allUsers: { docId: string; [x: string]: string }[] = result.docs.map(
    (item) => ({
      ...item.data(),
      docId: item.id,
    })
  );

  return allUsers
    ? allUsers
        .map(({ userId, username, fullName, docId }) => ({
          userId,
          username,
          fullName,
          docId,
        }))
        .filter((user) => !following.includes(user.userId))
    : [];
};

export const addUserFollowers = async (
  userDocId: string,
  newFolowers: string[]
) => {
  const docRef = await firebase.firestore().collection("users").doc(userDocId);

  docRef.get().then((doc) => {
    if (doc.exists) {
      const data = doc.data();
      const updatedFollowers = Array.from(
        new Set([...data?.followers, ...newFolowers])
      );
      docRef.update({ followers: updatedFollowers });
    }
  });
};

export const addUserFollowing = async (
  userDocId: string,
  newFolowing: string[]
) => {
  const docRef = await firebase.firestore().collection("users").doc(userDocId);

  docRef.get().then((doc) => {
    if (doc.exists) {
      const data = doc.data();
      const updatedFollowing = Array.from(
        new Set([...data?.following, ...newFolowing])
      );
      docRef.update({ following: updatedFollowing });
    }
  });
};
