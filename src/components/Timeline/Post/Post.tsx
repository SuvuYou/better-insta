import { FC, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import PostFooter from "./components/Footer/Footer";
import { getUserByUID } from "../../../services/firebase";
import { PostContainer, PostImage } from "./Post.styled";

interface PostType {
  caption: string;
  comments: {
    comment: string;
    displayName: string;
  }[];
  dateCreated: number;
  imageSrc: string;
  likes: string[];
  photoId: string;
  userId: string;
  userLatitude: string;
  userLongitude: string;
  docId: string;
}

const Post: FC<{ postData: PostType }> = ({ postData }) => {
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
