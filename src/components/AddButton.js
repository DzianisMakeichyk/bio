import React from 'react';
import Button from './styles/ButtonStyles'

class AddButton extends React.Component {
    render() {
        const { hideItems, toggleItems } = this.props;
        return (
            <Button onClick={toggleItems}>
                {hideItems ? 'Back' : 'Add User'}
            </Button>
        )
    }
}

export default AddButton;
