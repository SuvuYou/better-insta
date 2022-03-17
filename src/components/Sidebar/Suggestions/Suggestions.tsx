import { FC, useState, useEffect, useCallback } from "react";
import { getUserSuggestionsByUserId } from "../../../services/firebase";
import SuggestedProfile from "./SuggestedProfile";
import Skeleton from "react-loading-skeleton";

interface SuggestionsProps {
  userId: string;
  userDocId: string;
  following: string[];
}

const Suggestions: FC<SuggestionsProps> = ({
  userId,
  following,
  userDocId,
}) => {
  const [profiles, setProfiles] = useState<
    { username: string; fullName: string; userId: string; docId: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUserSuggestions = useCallback(
    async (userId: string) => {
      if (userId !== "") {
        setIsLoading(true);
        const userProfiles = await getUserSuggestionsByUserId(
          userId,
          following
        );
        setProfiles(userProfiles);
        setIsLoading(false);
      }
    },
    [userId]
  );

  useEffect(() => {
    fetchUserSuggestions(userId);
  }, [userId]);

  if (isLoading) {
    return <Skeleton style={{ borderRadius: "8px" }} count={1} height={150} />;
  }

  if (profiles.length === 0) {
    return <></>;
  }

  return (
    <div>
      {profiles.map((profile, index) => (
        <SuggestedProfile
          key={index}
          userName={profile.username}
          userId={userId}
          userDocId={userDocId}
          profileId={profile.userId}
          profileDocId={profile.docId}
        />
      ))}
    </div>
  );
};

export default Suggestions;
