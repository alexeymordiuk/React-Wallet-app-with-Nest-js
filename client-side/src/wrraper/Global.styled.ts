import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    border: none;
  }
  body {
    background: #35574e
  }
`;

export default GlobalStyle;