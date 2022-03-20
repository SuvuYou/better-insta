import { FC } from "react";
import { useUser } from "../../hookers/use-user";
import User from "./User/User";
import Suggestions from "./Suggestions/Suggestions";
import styled from "styled-components";

const SidebarContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media (max-width: 1000px) {
    display: none;
  }
`;

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
    <SidebarContainer>
      <User userName={user.username} fullName={user.fullName} />
      <div>
        <p
          style={{
            marginBottom: "10px",
            marginTop: 0,
            fontSize: "14px",
          }}
        >
          Suggestions for you
        </p>
        <Suggestions
          userId={user.userId}
          following={user.following}
          userDocId={user.docId}
        />
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
