import { FC } from "react";
import CommentsList from "../CommentsList/CommentsList";
import {
  CommentSectionContainer,
  Likes,
  Caption,
} from "./CommentSection.styled";

interface CommentSectionProps {
  username: string;
  caption: string;
  comments: {
    comment: string;
    displayName: string;
  }[];
  likes: string[];
}

const CommentSection: FC<CommentSectionProps> = ({
  username,
  caption,
  comments,
  likes,
}) => {
  return (
    <CommentSectionContainer>
      <Likes>
        <strong>Likes: </strong>
        {likes.length}
      </Likes>
      <Caption>
        <strong>{username}:</strong> {caption}
      </Caption>
      <CommentsList comments={comments} />
    </CommentSectionContainer>
  );
};

export default CommentSection;
