import { FC } from "react";
import { Container, FormContainer } from "./Login.styled";
import Form from "./Form/Form";
import Iphone from "./Iphone/Iphone";

const Login: FC = () => {
  return (
    <Container>
      <FormContainer>
        <Iphone />
        <Form />
      </FormContainer>
    </Container>
  );
};

export default Login;
