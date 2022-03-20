import { FC, useState, useRef } from "react";
import Actions from "../Actions/Actions";
import CommentSection from "../CommentSection/CommentSection";
import CommentInput from "../CommentInput/CommentInput";
import { FooterContainer } from "./Footer.styled";
import { useUser } from "../../../../../hookers/use-user";
import CommentRefContext from "../../../../../context/comment-ref";

interface PostFooterProps {
  userId: string;
  username: string;
  caption: string;
  comments: {
    comment: string;
    displayName: string;
  }[];
  likes: string[];
  photoDocId: string;
}

const Footer: FC<PostFooterProps> = ({
  caption,
  username,
  comments,
  likes,
  photoDocId,
}) => {
  const {
    user = {
      username: "",
      fullName: "",
      userId: "",
      following: [],
      docId: "",
    },
  } = useUser();

  const [allLikes, setAllLikes] = useState(likes);
  const [allComments, setAllComments] = useState(comments);

  const CommentRef = useRef();

  return (
    <CommentRefContext.Provider value={CommentRef}>
      <FooterContainer>
        <Actions
          currentUserId={user.userId}
          photoDocId={photoDocId}
          likes={allLikes}
          onLikesChange={setAllLikes}
        />
        <CommentSection
          username={username}
          comments={allComments}
          likes={allLikes}
          caption={caption}
        />
        <CommentInput
          currentUsername={user.username}
          photoDocId={photoDocId}
          onAddComment={setAllComments}
        />
      </FooterContainer>
    </CommentRefContext.Provider>
  );
};

export default Footer;
