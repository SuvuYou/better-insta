import { FC, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import PostFooter from "./components/Footer/Footer";
import { getUserByUID } from "../../../services/firebase";
import { PostContainer, PostImage } from "./Post.styled";
import { FirebasePostType } from "../../../types";

const Post: FC<{ postData: FirebasePostType }> = ({ postData }) => {
  const { likes, imageSrc, caption, userId, comments, docId } = postData;

  const [user, setUser] = useState<any>({});

  useEffect(() => {
    (async () => {
      const userInfo = await getUserByUID(userId);
      setUser(userInfo.activeUser[0]);
    })();
  }, [userId]);

  return (
    <PostContainer>
      <Header userName={user.username} />
      <PostImage src={imageSrc} />
      <PostFooter
        userId={user.userId}
        caption={caption}
        username={user.username}
        comments={comments}
        likes={likes}
        photoDocId={docId}
      />
    </PostContainer>
  );
};

export default Post;
