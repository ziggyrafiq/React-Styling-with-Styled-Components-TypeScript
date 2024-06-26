//Creating Styled Components with TypeScript in React
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? 'green' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  padding: 10px;
  border: 1px solid ${(props) => (props.primary ? 'green' : 'black')};
`;

export default StyledButton;
