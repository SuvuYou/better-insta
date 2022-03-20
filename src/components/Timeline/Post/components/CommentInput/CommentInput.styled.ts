import styled from "styled-components";
import { Colors } from "../../../../../constants/colors";

export const CommentInputContainer = styled.div`
  border-top: 1px solid ${Colors["border-gray"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  padding: 15px 15px;
  margin: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background-color: white;

  &:focus {
    outline: 1px solid ${Colors["bg-blue"]} !important;
    border-right: 1px solid ${Colors["bg-blue"]};
  }
`;

export const CommentBtn = styled.button`
  padding: 15px 25px;
  border: 0;
  background-color: white;
  color: ${Colors["bg-blue"]};
  cursor: pointer;
`;
