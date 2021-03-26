import styled from "styled-components";

export const GameContainer = styled.div`
  border: 0.2rem solid #0085a3;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
  max-width: 100vw;
  background: #ebfeff;
  border-radius: 1rem;
  text-align: center;
  padding: 2rem;
  margin: 0 4rem;

  p {
    font-size: 1.8rem;
    margin-bottom: 1.4rem;
  }
`;

type ButtonGameControllerProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonGameContainer = styled.div<ButtonGameControllerProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 2rem;
    width: 100%;
    height: 6rem;
    margin: 0.5rem 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
    border: 0.3rem solid #fff;
    box-shadow: 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    color: #fff;
    text-shadow: 0 0.1rem 0 rgba(0, 0, 0, 0.25);
  }
`;
