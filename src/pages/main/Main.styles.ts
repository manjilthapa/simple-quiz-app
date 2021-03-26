import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
      }
      html {
        font-size: 62.5%;
        box-sizing: border-box;
      }

      body {
        font-family: PT Mono, sans-serif;
        color: #555;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: linear-gradient(
          to top left,
          #d3954f,
          hsla(64, 55%, 64%, 0.89)
        );
      }
   
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 3rem;
    margin: 2rem auto;
  }

  h1 {
    font-family: PT Mono, "Arial Narrow Bold", sans-serif;

    background-size: 100%;
    font-size: 7rem;
    font-weight: 400;
    text-align: center;
    margin: 2rem;
  }

  .start,
  .next {
    border: none;
    font-size: 2rem;
    padding: 2rem 5rem;
    margin: 2rem 0;
    border-radius: 0.7rem;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 0.2rem solid #d38558;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
    cursor: pointer;

    /*cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 0.2rem solid #d38558;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    height: 4rem;
    margin: 2rem 0;
    padding: 2rem 5rem;
    font-size: 2rem;*/
  }

  .start {
    max-width: 20rem;
  }
`;
