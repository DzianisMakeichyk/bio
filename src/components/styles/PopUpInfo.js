import styled from 'styled-components';

const PopUpInfo = styled.div`
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 400px;
    padding: 15px 20px;
    background-color: ${props => props.theme.white};
    border-radius: 6px;
    box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.4);
    color: ${props => props.theme.veryDarkGray};
    line-height: 1.4;
    z-index: 9999;
    
    &.modal {
        button + button {
            background-color: ${props => props.theme.veryDarkGray};    
            margin-left: 10px;
        }
    }
`;

export default PopUpInfo;
