import React from 'react';
import styled from 'styled-components';
import SortableComponent from '../components/SortableComponent';
import AddButton from '../components/AddButton';

const UserList = styled.div`
  width: 300px;
  margin: 0 auto;
  min-height: 100vh;
    
  h1 {
    font-weight: 300;
    color: ${props => props.theme.white};
  }
`;

class Home extends React.Component {
  state = {
    hideItems: false,
  };

  toggleItems = () => {
    this.setState(state => {
      return {hideItems: !state.hideItems}
    })
  };

    render() {
      const { hideItems } = this.state;

      return (
        <UserList>
          <h1>User List</h1>
          <SortableComponent toggleItems={this.toggleItems} hideItems={hideItems} />
          <AddButton hideItems={hideItems} toggleItems={this.toggleItems} />
        </UserList>
      )
    }
}

export default Home;
