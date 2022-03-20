import styled from "styled-components";

export const Icon = styled.img<{ isClicked: boolean; isClicking: boolean }>`
  width: 32px;
  cursor: pointer;
  margin-right: 15px;
  transition: transform 1s;
  animation: ${({ isClicking }) =>
    isClicking ? "fade-in-keyframes 0.5s" : ""};

  ${(props) =>
    props.isClicked
      ? `filter: invert(1) sepia(1) saturate(25) hue-rotate(285deg);`
      : ""}

  @keyframes fade-in-keyframes {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.25);
    }
    50% {
      transform: scale(0.85);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const ActionsContainer = styled.div`
  background-color: white;
  padding: 10px 15px;
`;
