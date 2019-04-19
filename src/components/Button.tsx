import styled from 'styled-components';
import { textPrimary } from '../styles/text';

const Button = styled('button')`
  padding: 12px 20px;
  color: white;
  border-radius: 4px;
  background: #E91E63;
  border: none;
  cursor: pointer;
  outline: none;

  :hover {
    background: #E86E63;
  }

  :active {
    background: #E91E63;
  }

  ${textPrimary}
`;

export default Button;

