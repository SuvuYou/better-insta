import { useEffect, useState, useContext } from "react";
import UserContext from "../context/auth";
import { getUserByUID } from "../services/firebase";
import { FirebaseUserType } from "../types";

export const useUser = () => {
  const [activeUser, setActiveUser] = useState<FirebaseUserType>();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getActiveUserByUID = async (uid: string) => {
      const { activeUser } = await getUserByUID(uid);
      setActiveUser(activeUser[0] as FirebaseUserType);
    };

    if (user?.uid) {
      getActiveUserByUID(user?.uid);
    }
  }, [user]);

  return { user: activeUser };
};
