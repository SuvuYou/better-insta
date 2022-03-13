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
