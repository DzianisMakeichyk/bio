import styled from 'styled-components';

const AddUserBlock = styled.div` 
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.gray};
  color: ${props => props.theme.veryDarkGray};
  list-style: none;
  margin-bottom: 10px;
  
  label {}
  input {
    border: 0;
    font-size: 16px;
    width: 100%;
    height: 41px;
    text-align: center;
    padding: 8px 10px;
    background: transparent;
  }
`;

export default AddUserBlock;