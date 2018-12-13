import React from 'react';
import SortableList from './SortableList';
import AddUser from './AddUser';
import Button from './styles/ButtonStyles';
import PopUpInfo from './styles/PopUpInfo';

class SortableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.sortableListRef = React.createRef();
    }

    state = {
        items: [
            {name: 'Dzianis', email: 'dzianis@pencilsharpener.pl', IP: '127.0.0.1'},
            ],
        isExist: false,
        removeAll: false,
    };

    addUser = (user) => {
        const { items } = this.state;
        const { toggleItems } = this.props;

        const newUser = {
            name: user.name,
            email: user.email,
            IP: user.IP
        };

        if (items.length > 0 && items.find(item => item.name === user.name)) {
            this.setState({ isExist: true });
        } else {
            this.setState(state => {
                return { items }
            }, toggleItems );

            items.unshift(newUser);
        }
    };

    removeUser = (item) => {
        let items = this.state.items.slice();

        items.splice(item, 1);
        this.setState({ items });
    };

    removeAllUsers = () => {
        this.setState({ removeAll: !this.state.removeAll, items: [] });
    };

    removeAllUsersModal = () => {
        this.setState({ removeAll: !this.state.removeAll });
    };


    render() {
        const { items, isExist, removeAll } = this.state;
        const { hideItems } = this.props;

        return (
            <React.Fragment>
                {hideItems && <AddUser addUser={this.addUser} />}
                <div>
                    <SortableList
                        ref={this.sortableListRef}
                        transitionDuration={500}
                        items={items}
                        hideItems={hideItems}
                        removeUser={this.removeUser}
                    />
                    {isExist && <PopUpInfo><p>User or Email exists.</p><Button onClick={() => {this.setState({ isExist: false })}}>ok</Button></PopUpInfo>}
                    {items.length >= 1 && <Button onClick={() => this.removeAllUsersModal()}>Delete All Users</Button>}
                    {removeAll && <PopUpInfo>
                        Are you sure?
                        <Button onClick={() => this.removeAllUsers()}>Delete</Button>
                        <Button onClick={() => this.removeAllUsersModal()}>Cancel</Button>
                    </PopUpInfo>}
                </div>
            </React.Fragment>
        )
    }
}

export default SortableComponent;
