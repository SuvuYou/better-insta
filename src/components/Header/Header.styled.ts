import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  background: white;
  height: 64px;
  border-bottom: 1px solid ${Colors["border-gray"]};
  margin-bottom: 32px;
`;

export const HeaderLogoContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const LogoFrame = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const NoStyleBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const LoginBtn = styled.button`
  border: none;
  background-color: ${Colors["bg-blue"]};
  width: 70px;
  height: 25px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
`;

export const SignupBtn = styled.button`
  border: none;
  color: ${Colors["bg-blue"]};
  width: 70px;
  height: 25px;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`;

export const HeaderLogo = styled.img`
  margin-top: 3px;
  width: 50%;
  max-width: 200px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
`;
