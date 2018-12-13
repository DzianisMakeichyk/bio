import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 20px;
  border: 0;
  border-radius: 6px;
  background: ${props => props.theme.mainlyRed};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  color: ${props => props.theme.white};
  font-family: inherit;
  font-size: 14px;
  letter-spacing: .4px;
  cursor: pointer;
  outline: none;
  transform: none;
  transition: .3s ease-out;
  
  &:not(:disabled) {
      &:hover {
        transform: scale(1.05);
      }
  }
  
  &:disabled {
    background: ${props => props.theme.gray};
    cursor: not-allowed;
  }
`;

export default Button;