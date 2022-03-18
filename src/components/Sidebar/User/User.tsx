import { FC, useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import { Avatar, UserContainer, UserNameHolder } from "./User.styled";

interface UserProps {
  userName: string;
  fullName: string;
}

const User: FC<UserProps> = ({ userName, fullName }) => {
  const [imageSrc, setImageSrc] = useState(`images/avatars/${userName}.jpg`);

  useEffect(() => {
    setImageSrc(`images/avatars/${userName}.jpg`);
  }, [userName]);

  return (
    <>
      {userName === "" || fullName === "" ? (
        <Skeleton style={{ borderRadius: "8px" }} count={1} height={61} />
      ) : (
        <Link
          to={`/p/${userName}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <UserContainer>
            <Avatar
              src={imageSrc}
              onError={() => setImageSrc("images/avatars/default.jpg")}
            />
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
