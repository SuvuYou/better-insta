import { FC, useMemo, useState } from "react";
import { ShowMoreCommentsText } from "./CommentsList.styled";

interface CommentsListProps {
  comments: {
    comment: string;
    displayName: string;
  }[];
}

const CommentsList: FC<CommentsListProps> = ({ comments }) => {
  const [visibleCommentsLength, setVisibleCommentsLength] = useState(2);

  const showAllComments = visibleCommentsLength === comments.length;

  const visibleComments = useMemo(
    () => comments.filter((_, index) => index < visibleCommentsLength),
    [comments, visibleCommentsLength]
  );

  return (
    <div>
      {!showAllComments ? (
        <ShowMoreCommentsText
          onClick={() => setVisibleCommentsLength(comments.length)}
        >
          View all {comments.length} comments
        </ShowMoreCommentsText>
      ) : (
        <></>
      )}
      {visibleComments.map((comment, index) => (
        <p key={index} style={{ margin: "10px 0" }}>
          <strong>{comment.displayName}: </strong>
          {comment.comment}
        </p>
      ))}
    </div>
  );
};

export default CommentsList;
