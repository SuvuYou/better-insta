import styled from "styled-components";

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  margin-bottom: 16px;
`;

export const UserNameHolder = styled.div`
  p:first-of-type {
    font-weight: bold;
  }
`;
