import styled from "styled-components";
import { Colors } from "../../../../../constants/colors";

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  max-width: 24px;
  max-height: 24px;
  border-radius: 50%;
`;

export const Username = styled.p`
  font-size: 13px;
`;

export const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 0 15px 0 15px;
  height: 60px;
  border-bottom: 1px solid ${Colors["border-gray"]};
`;
