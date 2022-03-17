import { FC } from "react";
import { useUser } from "../../hookers/use-user";
import User from "./User/User";
import Suggestions from "./Suggestions/Suggestions";

const Sidebar: FC = () => {
  const {
    user = {
      username: "",
      fullName: "",
      userId: "",
      following: [],
      docId: "",
    },
  } = useUser();
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <User userName={user.username} fullName={user.fullName} />
      <Suggestions
        userId={user.userId}
        following={user.following}
        userDocId={user.docId}
      />
    </div>
  );
};

export default Sidebar;
