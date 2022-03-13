import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { Avatar, UserContainer, UserNameHolder } from "./User.styled";

interface UserProps {
  userName: string;
  fullName: string;
}

const User: FC<UserProps> = ({ userName, fullName }) => {
  return (
    <>
      {userName === "" || fullName === "" ? (
        <Skeleton count={1} height={61} />
      ) : (
        <Link
          to={`/p/${userName}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <UserContainer>
            <Avatar src={`images/avatars/default.jpg`} />
            <UserNameHolder>
              <p>{userName}</p>
              <p>{fullName}</p>
            </UserNameHolder>
          </UserContainer>
        </Link>
      )}
    </>
  );
};

export default User;
