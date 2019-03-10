import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: 'Saira Condensed', sans-serif;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }

  #root{
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: opacity 1s ease;
  transition-delay: 1s;
`;
