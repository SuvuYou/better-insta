import { FC, useEffect, useReducer } from "react";
import { getPostsForUserByUID } from "../../services/firebase";
import Header from "./Header/Header";
import Photos from "./Photos/Photos";
import { FirebaseUserType, initialUser, FirebasePostType } from "../../types";

type StateType = {
  profile: FirebaseUserType;
  photosCollection: FirebasePostType[];
  followersCount: number;
};

const initialState = {
  profile: { ...initialUser, docId: "" },
  photosCollection: [],
  followersCount: 0,
};

const reducer = (state: StateType, newState: { [x: string]: any }) => ({
  ...state,
  ...newState,
});

const Profile: FC<{ user: FirebaseUserType }> = ({ user }) => {
  const [{ profile, photosCollection, followersCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    (async () => {
      const { posts } = await getPostsForUserByUID(user.userId);
      dispatch({
        profile: user,
        photosCollection: posts,
        followersCount: user.followers.length,
      });
    })();
  }, [user.username]);

  return (
    <>
      <Header
        postsCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followersCount={followersCount}
        setFollowersCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </>
  );
};

export default Profile;
