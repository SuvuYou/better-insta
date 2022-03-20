import { FC, useState, useEffect } from "react";
import { Avatar, Username, HeaderContainer } from "./Header.styled";

const Header: FC<{ userName: string }> = ({ userName }) => {
  const [imageSrc, setImageSrc] = useState(`images/avatars/${userName}.jpg`);

  useEffect(() => {
    setImageSrc(`images/avatars/${userName}.jpg`);
  }, [userName]);

  if (!userName) {
    return <></>;
  }

  return (
    <HeaderContainer>
      <Avatar
        src={imageSrc}
        onError={() => setImageSrc("images/avatars/default.jpg")}
      />
      <Username>{userName}</Username>
    </HeaderContainer>
  );
};

export default Header;
