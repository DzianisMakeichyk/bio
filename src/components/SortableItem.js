import React from 'react';
import styled from 'styled-components';
import Button from './styles/ButtonStyles';
import PopUpInfo from './styles/PopUpInfo';

const User = styled.li`
  position: relative;
  padding: 15px 20px;
  background-color: ${props => props.theme.white};
  border-radius: 6px;
  box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.4);
  color: ${props => props.theme.veryDarkGray};
  list-style: none;
  
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  
  h3, h5, h6 {
    margin: 0;
  }
`;

const Delete = styled.span`
    position: absolute;
    top: 18px;
    right: 12px;
    cursor: pointer;
    transition: .3s ease;
    font-size: 11px;
    line-height: 1px;
    color: red;
    font-weight: 100;
    
    &:hover {
        transform: scale(1.05)
    }
`;

class SortableItem extends React.Component {
    state = {
        modal: false,
    };

    removeItem = (item) => {
        this.props.removeUser(item);
        this.setState({ modal: !this.state.modal });
    };
    handelModal = () => {
        this.setState({ modal: !this.state.modal });
    };
    render() {
        const { item, value } = this.props;
        return (
            <User>
                <div className="info-holder">
                    <Delete onClick={() => this.handelModal()}>Delete</Delete>
                    <h3>{value.name}</h3>
                    <h5>{value.email}</h5>
                    <h6>IP: {value.IP}</h6>
                </div>
                {this.state.modal &&
                <PopUpInfo className="modal">
                    Do you want delete {value.name}?
                    <Button onClick={() => this.removeItem(item)}>Delete</Button>
                    <Button onClick={() => this.handelModal()}>Cancel</Button>
                </PopUpInfo>
                }
            </User>
        )
    }
}

export default SortableItem;
