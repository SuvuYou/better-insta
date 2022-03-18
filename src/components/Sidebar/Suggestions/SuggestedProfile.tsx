import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Avatar,
  UserContainer,
  UserNameHolder,
  FollowButton,
} from "./Suggestions.styled";
import { addUserFollowers, addUserFollowing } from "../../../services/firebase";

interface ProfileProps {
  userName: string;
  profileId: string;
  profileDocId: string;
  userId: string;
  userDocId: string;
}

const SuggestedProfile: FC<ProfileProps> = ({
  userName,
  profileId,
  profileDocId,
  userId,
  userDocId,
}) => {
  const [imageSrc, setImageSrc] = useState(`images/avatars/${userName}.jpg`);
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowUser = async () => {
    setIsFollowed(true);
    addUserFollowers(profileDocId, [userId], true);
    addUserFollowing(userDocId, [profileId], true);
  };

  if (isFollowed) {
    return <></>;
  }

  return (
    <>
      <UserContainer>
        <Link to={`/p/${userName}`} style={{ width: "24px", height: "24px" }}>
          <Avatar
            src={imageSrc}
            onError={() => setImageSrc("images/avatars/default.jpg")}
          />
        </Link>
        <UserNameHolder>
          <p>{userName}</p>
          <FollowButton onClick={() => handleFollowUser()}>Follow</FollowButton>
        </UserNameHolder>
      </UserContainer>
    </>
  );
};

export default SuggestedProfile;
