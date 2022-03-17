import { useEffect, useState, useContext } from "react";
import UserContext from "../context/auth";
import { getUserByUID } from "../services/firebase";

interface UserType {
  username: string;
  fullName: string;
  userId: string;
  following: string[];
  docId: string;
}

export const useUser = () => {
  const [activeUser, setActiveUser] = useState<UserType>();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getActiveUserByUID = async (uid: string) => {
      const { activeUser } = await getUserByUID(uid);
      setActiveUser(activeUser[0] as UserType);
    };

    if (user?.uid) {
      getActiveUserByUID(user?.uid);
    }
  }, [user]);

  return { user: activeUser };
};
