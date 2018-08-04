import { injectGlobal } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    height: 100%;

    body {
    background-color: #F5F5F5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    width: 100%;
    height: 100%;

      .App, #root {
        height: 100%;
      }
    }
  }
`;
