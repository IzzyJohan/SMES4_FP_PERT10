import { createGlobalStyle } from "styled-components";  

const GlobalStyle = createGlobalStyle`
    // CSS RESET, FONT 
    body {
    margin: 0;
    font-family: 'Montserrat', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    /* CSS Reset */

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
`;

export default GlobalStyle;