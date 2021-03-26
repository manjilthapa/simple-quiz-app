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
    /*html{
        height: 100%;
    }
    body{
        margin: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        height: 100vh;
        background: #e8e8e8;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23161616' fill-opacity='0.1'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E");
 
    }
    *{
        box-sizing: border-box;
        font-family: PT Mono, sans-serif;
    }*/
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
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(0.2rem 0.2rem #008583);
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
