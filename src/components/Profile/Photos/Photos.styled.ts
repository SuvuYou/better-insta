import styled, { css } from "styled-components";
import { Colors } from "../../../constants/colors";

export const Container = styled.div`
  border-top: 1px solid ${Colors["border-gray"]};
  padding: 20px 15px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px;

  @media (max-width: 724px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 100%;

  &:after {
    content: "";
    display: block;
    padding-bottom: 120%;
    background-color: white;
  }
`;

export const Photo = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Overlay = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.75;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const IconsContainer = styled.div`
  top: calc(50% - 32px);
  left: 0;
  position: absolute;
  width: 100%;
  cursor: pointer;
  margin-right: 15px;
  display: flex;
  gap: 35px;
  justify-content: center;
`;
