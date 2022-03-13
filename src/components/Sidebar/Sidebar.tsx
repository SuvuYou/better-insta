import { FC } from "react";
import { useUser } from "../../hookers/use-user";
import User from "./User/User";
import Suggestions from "./Suggestions/Suggestions";

const Sidebar: FC = () => {
  const { user = { username: "", fullName: "", userId: "" } } = useUser();
  return (
    <div>
      <User userName={user.username} fullName={user.fullName} />
      <Suggestions userId={user.userId} />
    </div>
  );
};

export default Sidebar;
