import { FC, useMemo, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../../../context/firebase";
import { doesUserNameExist } from "../../../services/firebase";
import {
  Form,
  LogoContainer,
  Error,
  Frame,
  Input,
  SubmitButton,
  FormColumn,
  NoAccountButton,
  NoAccountText,
} from "./Form.styled";

import * as ROUTES from "../../../constants/routes";

const SignUpForm: FC = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const userNameExists = await doesUserNameExist(userName);

    if (!userNameExists.length) {
      try {
        const createdUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        await createdUser.user.updateProfile({
          displayName: userName,
        });
        firebase.firestore().collection("users").add({
          userId: createdUser.user.uid,
          username: userName,
          fullName: fullName,
          emailAddress: email.toLowerCase(),
          following: [],
          followers: [],
          dateCreated: Date.now(),
        });
        setLoading(false);
        navigate(ROUTES.DASHBOARD, { replace: false });
      } catch (error) {
        setLoading(false);
        setUserName("");
        setFullName("");
        setEmail("");
        setPassword("");
        setError((error as any).message);
      }
    } else {
      setLoading(false);
      setError("This username is already taken");
    }
  };

  const isValid = useMemo(() => {
    return password !== "" && email !== "";
  }, [password, email]);

  return (
    <FormColumn>
      <Form>
        <LogoContainer>
          <img
            src="/images/logo.png"
            alt="instagram"
            style={{ width: "50%", margin: "2px 0 4px" }}
          />
        </LogoContainer>
        {error && <Error>{error}</Error>}
        <Frame>
          <Input
            aria-label="Enter username"
            type="text"
            value={userName}
            placeholder={"Username"}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <Input
            aria-label="Enter full name"
            type="text"
            value={fullName}
            placeholder={"Full name"}
            onChange={(event) => {
              setFullName(event.target.value);
            }}
          />
          <Input
            aria-label="Enter email"
            type="text"
            value={email}
            placeholder={"Email"}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            aria-label="Enter password"
            type="password"
            value={password}
            placeholder={"Password"}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <SubmitButton
            onClick={handleSignUp}
            isValid={isValid && !loading}
            type="submit"
            disabled={!isValid || loading}
          >
            Sign Up
          </SubmitButton>
        </Frame>
      </Form>
      <NoAccountButton>
        Already have an account?
        <NoAccountText to={ROUTES.LOGIN} style={{ textDecoration: "none" }}>
          Log In
        </NoAccountText>
      </NoAccountButton>
    </FormColumn>
  );
};

export default SignUpForm;
