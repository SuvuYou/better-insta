import styled from "styled-components";
import { Colors } from "../../../constants/colors";

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  align-items: center;
  margin-bottom: 8px;
`;

export const UserNameHolder = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const FollowButton = styled.p`
  margin-right: 10px;
  color: ${Colors["bg-blue"]};
  cursor: pointer;
`;
