import { FC, useContext } from "react";
import UserContext from "../../context/auth";
import FirebaseContext from "../../context/firebase";
import * as ROUTES from "../../constants/routes";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderLogoContainer,
  LogoLink,
  LogoFrame,
  ButtonWrapper,
  NoStyleBtn,
  Avatar,
  LoginBtn,
  SignupBtn,
} from "./Header.styled";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <LogoFrame>
          <LogoLink to={ROUTES.DASHBOARD}>
            <HeaderLogo src="/images/logo.png" />
          </LogoLink>
          <ButtonWrapper>
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD}>
                  <img
                    src="https://img.icons8.com/ios/24/000000/home--v1.png"
                    width={"20px"}
                  />
                </Link>
                <NoStyleBtn
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
                >
                  <img
                    width={"20px"}
                    src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/000000/external-logout-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya.png"
                  />
                </NoStyleBtn>
                <Link to={`/p/${user.displayName}`}>
                  <Avatar src={"images/avatars/default.jpg"} />
                </Link>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <LoginBtn>Log In</LoginBtn>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <SignupBtn>Sign Up</SignupBtn>
                </Link>
              </>
            )}
          </ButtonWrapper>
        </LogoFrame>
      </HeaderLogoContainer>
    </HeaderContainer>
  );
};

export default Header;
