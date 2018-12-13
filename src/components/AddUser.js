import React from 'react';
import styled from 'styled-components';
import AddUserBlock from './styles/AddUserBlock';
import Button from './styles/ButtonStyles';

const AddUserStyles = styled.div`
    padding: 20px 12px;
    background-color: ${props => props.theme.white};
    box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    margin-bottom: 15px;
    
    .title {
        display:block;
        text-align: center;
        font-weight: 300;
        font-size: 18px;
        padding-bottom: 15px;
    }
`;

const Error = styled.p`
    padding: 3px 0;
    color: red;
    font-size: 10px;
`;

class AddUser extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        name: '',
        email: '',
        IP: '',
        disabled: true,
        error: ''
    };

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;

        this.setState({ [name]: val });

        const { email, IP } = this.state;

        if (email.length < 5) {
            return this.setState({ error: 'Email should be at least 5 charcters long' });
        }
        if (email.split('').filter(x => x === '@').length !== 1) {
            return this.setState({ error: 'Email should contain a @' });
        }
        if (email.indexOf('.') === -1) {
            return this.setState({ error: 'Email should contain at least one dot' });
        }

        if (IP.length < 6) {
            return this.setState({ error: 'IP should be at least 6 characters long' });
        }

        if ((/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(IP))) {
            return this.setState({ error: 'You have entered an invalid IP address!' });
        }

        return this.setState({ disabled: false , error: '' });
    };

    sendUser = () => {
        const { name, email, IP } = this.state;

        this.props.addUser({ name, email, IP });
    };

    render() {
        const { name, email, IP, disabled, error } = this.state;

        return (
            <AddUserStyles>
                <i className="title">
                    Add New User
                </i>
                <AddUserBlock>
                    <label htmlFor="name">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                </AddUserBlock>
                <AddUserBlock>
                    <label htmlFor="email">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                </AddUserBlock>
                <AddUserBlock>
                    <label htmlFor="name">
                        <input
                            type="text"
                            id="IP"
                            name="IP"
                            placeholder="IP"
                            required
                            value={IP}
                            onChange={this.handleChange}
                        />
                    </label>
                </AddUserBlock>
                {error && <Error>{error}</Error>}
                <Button
                    disabled={disabled}
                    onClick={() => this.sendUser()}
                    className="add-user-button"
                >
                    Add
                </Button>
            </AddUserStyles>
        )
    }
}

export default AddUser;
