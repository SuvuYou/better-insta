import { FC, useEffect } from "react";
import SignUp from "../../components/SignUp/SignUp";

const SignUpPage: FC = () => {
  useEffect(() => {
    document.title = "SignUp - Better Insta";
  }, []);

  return <SignUp />;
};

export default SignUpPage;
