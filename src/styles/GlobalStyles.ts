import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color:rgb(251, 252, 255);
     }
    ${reset}
`;

export default GlobalStyle;
