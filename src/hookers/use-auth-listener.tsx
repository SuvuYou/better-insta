import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")!));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser: any) => {
      if (authUser) {
        localStorage.setItem("user", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("user");
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
