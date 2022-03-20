import React, { FC, useState, useContext } from "react";
import {
  CommentInputContainer,
  Input,
  CommentBtn,
} from "./CommentInput.styled";
import { addComment } from "../../../../../services/firebase";
import CommentRefContext from "../../../../../context/comment-ref";

const CommentInput: FC<{
  photoDocId: string;
  currentUsername: string;
  onAddComment: React.Dispatch<React.SetStateAction<any>>;
}> = ({ photoDocId, currentUsername, onAddComment }) => {
  const [commentText, setCommentText] = useState("");
  const CommentRef = useContext(CommentRefContext);

  const postComment = async () => {
    if (commentText.trim() === "") {
      return;
    }
    const comment = {
      comment: commentText.trim(),
      displayName: currentUsername,
    };
    addComment(photoDocId, comment);
    onAddComment((prev: any[]) => [...prev, comment]);
    setCommentText("");
  };

  return (
    <CommentInputContainer>
      <Input
        ref={CommentRef}
        placeholder="Add a comment..."
        type={"text"}
        value={commentText}
        onChange={(e) => {
          setCommentText(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            postComment();
          }
        }}
      />
      <CommentBtn
        onClick={() => {
          postComment();
        }}
      >
        Post
      </CommentBtn>
    </CommentInputContainer>
  );
};

export default CommentInput;
