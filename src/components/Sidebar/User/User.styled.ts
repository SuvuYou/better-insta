import styled from "styled-components";

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  align-items: center;
`;

export const UserNameHolder = styled.div`
  font-size: 13px;
  p:first-of-type {
    margin-bottom: 4px;
    font-weight: bold;
  }
  p:last-of-type {
    margin-top: 4px;
  }
`;
