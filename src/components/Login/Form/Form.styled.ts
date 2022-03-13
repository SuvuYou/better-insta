import styled, { css } from "styled-components";
import { Colors } from "../../../constants/colors";
import { Link } from "react-router-dom";

export const Form = styled.form`
  background-color: white;
  padding: 20px 15px;
  border: 1px solid ${Colors["border-gray"]};
  border-radius: 3px;
`;

export const FormColumn = styled.div`
  width: 40%;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Error = styled.p`
  color: ${Colors["red-primary"]};
`;

export const Frame = styled.div``;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  color: ${Colors["gray-base"]};
  height: 40px;

  padding: 5px 10px;
  margin: 10px 0;
  border: 1px ${Colors["border-gray"]} solid;
  border-radius: 3px;
`;

export const SubmitButton = styled.button<{ isValid: boolean }>`
  background-color: ${Colors["bg-blue"]};
  color: white;
  border: none;
  height: 35px;
  width: 100%;
  padding: 5px 10px;
  margin: 10px 0;
  border-radius: 3px;
  cursor: pointer;

  ${({ isValid }) =>
    isValid
      ? css`
          opacity: 1;
        `
      : `opacity: 0.5;
      cursor: default;`}

  &:active {
    opacity: 0.5;
  }
`;

export const NoAccountButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid ${Colors["border-gray"]};
  height: 45px;
  width: 100%;
  padding: 5px 10px;
  margin: 10px 0;
  border-radius: 3px;
`;

export const NoAccountText = styled(Link)`
  color: ${Colors["blue-medium"]};
  font-weight: bold;
`;
