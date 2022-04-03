import React, { FC, useEffect, useState } from "react";
import { useUser } from "../../../hookers/use-user";
import { FirebaseUserType } from "../../../types";
import { addUserFollowers, addUserFollowing } from "../../../services/firebase";
import {
  Avatar,
  Container,
  ProfileInfo,
  FollowButton,
  InfoRow,
  UsernameLabel,
} from "./Header.styled";

type HeaderProps = {
  postsCount: number;
  profile: FirebaseUserType;
  followersCount: number;
  setFollowersCount: React.Dispatch<
    React.SetStateAction<{ followersCount: number }>
  >;
};

const Header: FC<HeaderProps> = ({
  postsCount,
  profile,
  followersCount,
  setFollowersCount,
}) => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdatingFollowing, setIsUpdatingFollowing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [imageSrc, setImageSrc] = useState(`/images/avatars/default.jpg`);

  useEffect(() => {
    if (profile) {
      setImageSrc(`/images/avatars/${profile.username}.jpg`);
    }
  }, [profile]);

  useEffect(() => {
    setIsLoading(true);
    if (user && profile) {
      if (user.following.includes(profile.userId)) {
        setIsFollowing(true);
      }
      setIsLoading(false);
    }
  }, [user, profile]);

  const handleFollow = async () => {
    if (!user || !profile) {
      return;
    }
    setIsUpdatingFollowing(true);
    setFollowersCount({
      followersCount: isFollowing ? followersCount - 1 : followersCount + 1,
    });
    setIsFollowing((prev) => !prev);

    await Promise.all([
      addUserFollowing(user.docId, [profile.userId], !isFollowing),
      addUserFollowers(profile.docId, [user.userId], !isFollowing),
    ]);

    setIsUpdatingFollowing(false);
  };

  if (!user || !profile) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <Container>
          <Avatar
            src={imageSrc}
            onError={() => setImageSrc("/images/avatars/default.jpg")}
          />
          <ProfileInfo>
            <InfoRow>
              <UsernameLabel>{profile.username}</UsernameLabel>
              {user.username !== profile.username ? (
                <FollowButton
                  isValid={!isUpdatingFollowing}
                  onClick={handleFollow}
                >
                  {isFollowing ? "Unfollow" : "Follow"}
                </FollowButton>
              ) : null}
            </InfoRow>
            <InfoRow>
              <div>
                <strong style={{ marginRight: "8px" }}>{postsCount}</strong>
                photos
              </div>
              <div>
                <strong style={{ marginRight: "8px" }}>{followersCount}</strong>
                followers
              </div>
              <div>
                <strong style={{ marginRight: "8px" }}>
                  {profile.following.length}
                </strong>
                following
              </div>
            </InfoRow>
            <InfoRow>
              <strong>{profile.fullName}</strong>
            </InfoRow>
          </ProfileInfo>
        </Container>
      )}
    </>
  );
};

export default Header;
