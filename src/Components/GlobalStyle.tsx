//  We are using Global Styles with TypeScript in React
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 body {
    font-family: 'Arial', sans-serif; 
    background-color: #f0f0f0; 
    margin: 0;  
    padding: 0;  
  }
`;

export default GlobalStyle;
