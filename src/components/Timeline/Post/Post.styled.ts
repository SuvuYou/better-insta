import styled from "styled-components";
import { Colors } from "../../../constants/colors";

export const PostContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 24px auto;
  border: 1px solid ${Colors["border-gray"]};
`;

export const PostImage = styled.img`
  width: 100%;
  display: block;
`;
