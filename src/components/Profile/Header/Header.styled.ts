import styled, { css } from "styled-components";
import { Colors } from "../../../constants/colors";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 33% auto;
`;

export const Avatar = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 50%;
  margin-left: 60px;

  @media (max-width: 724px) {
    margin: 0 30px;
    width: 64px;
    height: 64px;
  }
`;

export const ProfileInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  height: 33%;

  div {
    margin-right: 20px;
  }
`;

export const UsernameLabel = styled.h3``;

export const FollowButton = styled.button<{ isValid: boolean }>`
  background-color: ${Colors["bg-blue"]};
  color: white;
  border: none;
  height: 25px;
  width: auto;
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
