import { createGlobalStyle } from "styled-components";

import SoraWoff from "./fonts/sora-regular/sora-v9-latin-regular.woff";
import SoraWoff2 from "./fonts/sora-regular/sora-v9-latin-regular.woff2";

export const GlobalStyle = createGlobalStyle`
  /* import fonts */
  @font-face {
    font-family: 'Sora';
    src: url(${SoraWoff2}) format('woff2'),
         url(${SoraWoff}) format('woff');
  } 

  /* add styles */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily}, sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;
