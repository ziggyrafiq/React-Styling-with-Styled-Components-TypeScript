// We are using Styled Components in React with TypeScript
import React from 'react';
import { ThemeProvider } from 'styled-components';
import StyledButton from './Components/StyledButton';
import StyledAlert from './Components/StyledAlert';
import GlobalStyle from './Components/GlobalStyle';
import Theme from './Components/Theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
    <div>
       <GlobalStyle />
      <h1>Styling in React with Styled Components</h1>
      <div>
      <h2>Styling Button in React with Styled Components</h2>
      <StyledButton>Default Button</StyledButton>
      <StyledButton primary>Primary Button</StyledButton>
       </div>
      <div>
        <h2>Styling Alert in React with Styled Components</h2>
      <StyledAlert type="success">Success Message</StyledAlert>
      <StyledAlert type="error">Error Message</StyledAlert>
        </div>
         <div>
        <h2>Styling Themes in React with Styled Components</h2>
        <p style={{ color: Theme.colors.primary }}>Primary Text</p>
        <p style={{ color: Theme.colors.secondary }}>Secondary Text</p>
      </div>
    </div>
    </ThemeProvider>
  );
};
export default App;