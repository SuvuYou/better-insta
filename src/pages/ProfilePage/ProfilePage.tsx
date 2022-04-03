import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserByUsername } from "../../services/firebase";
import * as ROUTES from "../../constants/routes";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import { FirebaseUserType, initialUser } from "../../types";
import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const ProfilePage: FC = () => {
  const { username } = useParams();
  const [user, setUser] = useState<FirebaseUserType>({
    ...initialUser,
    docId: "",
  });
  const [doesUserExist, setDoesUserExist] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (username) {
        const { user } = await getUserByUsername(username);
        if (!!user[0]) {
          setUser(user[0]);
          setDoesUserExist(true);
        } else {
          setDoesUserExist(false);
          navigate(ROUTES.NOT_FOUND, { replace: false });
        }
      }
    })();
  }, [username, navigate]);

  return (
    <div>
      {doesUserExist ? (
        <>
          <Header />
          <Content>
            <Profile user={user} />
          </Content>
        </>
      ) : (
        "false"
      )}
    </div>
  );
};

export default ProfilePage;
