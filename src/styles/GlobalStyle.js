import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './Font.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
  button {
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;

export default GlobalStyle;
