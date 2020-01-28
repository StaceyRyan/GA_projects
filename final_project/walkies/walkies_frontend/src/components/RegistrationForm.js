import React from 'react';
import Dog from './Dog';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            preferred_name: '',
            email: '',
            phone_number: '',
            submitDisabled: true
        };
        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
    }

    handleKeyStrike(event) {
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value }, () => {
            if (this.state.username &&
                this.state.password &&
                this.state.preferred_name &&
                this.state.email &&
                this.state.phone_number) {
                this.setState({
                    submitDisabled: false
                })
            }
            else {
                this.setState({
                    submitDisabled: true
                })
            }
        });
    }

    handleSubmitButton = async () => {
        console.log('handle registration form submit button')
        
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({ "username": "Bob", "password": "123", "preferred_name": "Mr Bob", "email": "bob@gmail.com", "phone_number": 12345678 });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const newHuman = fetch("http://localhost:4000/user/newHuman", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

            console.log('New user created ' + JSON.stringify(newHuman));
    };

    render() {
        return (
            <>
                <div className={"form-group"}>
                    <label>
                        Username:
                        <input type="text" name="username"
                            value={this.state.username}
                            className={"form-control"} />
                    </label>
                </div>
                <div className={"form-group"}>
                    <label>
                        Preferred Name:
                        <input type="text" name="preferred_name"
                            value={this.state.preferred_name}
                            className={"form-control"} />
                    </label>
                </div>
                <label>
                    Password:
                        <input type="text" name="password"
                        value={this.state.password}
                        className={"form-control"} />
                </label>
                <div className={"form-group"}>
                    <label>
                        Email:
                        <input type="text" name="email"
                            value={this.state.email}
                            className={"form-control"} />
                    </label>
                    <div className={"form-group"}>
                        <label>
                            Phone Number:
                        <input type="text" name="phonenumber"
                                value={this.state.phonenumber}
                                className={"form-control"} />
                        </label>
                    </div>
                </div>
                <button>Enter</button>
            </>
        )
    }
}

export default RegistrationForm;