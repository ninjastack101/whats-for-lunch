import { createGlobalStyle } from 'styled-components';
import { fullSize } from '../styles/layouts';

const GlobalStyles = createGlobalStyle`
  #root, html, body {
    margin: 0px;
    font-family: sans-serif;
    ${fullSize}
  }
`;

export default GlobalStyles;
