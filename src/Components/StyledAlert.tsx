//  we are Passing Props to Styled Components with TypeScript in React
import styled from 'styled-components';

interface AlertProps {
  type: 'success' | 'error';
}

const StyledAlert = styled.div<AlertProps>`
  background-color: ${(props) => (props.type === 'success' ? 'green' : 'red')};
  color: white;
  padding: 10px;
  border-radius: 4px;
`;

export default StyledAlert;
