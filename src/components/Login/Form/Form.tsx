import { FC, useMemo, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import FirebaseContext from "../../../context/firebase";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate(ROUTES.DASHBOARD, { replace: false });
    } catch (error) {
      setEmail("");
      setPassword("");
      setError((error as any).message);
    }
    setLoading(false);
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
            onClick={handleLogin}
            isValid={isValid && !loading}
            type="submit"
            disabled={!isValid || loading}
          >
            Log In
          </SubmitButton>
        </Frame>
      </Form>
      <NoAccountButton>
        Don't have an account?
        <NoAccountText to={ROUTES.SIGN_UP} style={{ textDecoration: "none" }}>
          Sign Up
        </NoAccountText>
      </NoAccountButton>
    </FormColumn>
  );
};

export default LoginForm;
