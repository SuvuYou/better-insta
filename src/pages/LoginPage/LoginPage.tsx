import { FC, useEffect } from "react";
import Login from "../../components/Login/Login";

const LoginPage: FC = () => {
  useEffect(() => {
    document.title = "Login - Better Insta";
  }, []);

  return <Login />;
};

export default LoginPage;
