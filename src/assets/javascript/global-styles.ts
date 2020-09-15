import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family:  ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontDefault};
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.light};
    font-weight: ${({ theme }) => theme.lightly};
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.dark};
  }
`
