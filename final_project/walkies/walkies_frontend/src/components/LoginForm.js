import React from 'react';
import Dog from './Dog';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitDisabled: true
        };
        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
    };
    handleKeyStrike(event) {
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value }, () => {
            if (this.state.username && this.state.password) {
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
        console.log('handle login form button clicked');

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({ "username": this.state.username, "password": this.state.password });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

       const loginUser = fetch("http://localhost:4000/auth/login", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        console.log('API login ' + JSON.stringify(loginUser));
    };

    render() {
        return (
            <>
                <div className={"form-group"}>
                    <label>
                        Username:
                        <input type="text" name="username"
                            value={this.state.username}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                </div>
                <label>
                    Password:
                        <input type="password" name="password"
                        value={this.state.password}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </label>
                <button onClick={this.handleSubmitButton} disabled={this.state.submitDisabled}>Submit</button>
            </>
        )
    }
};

export default LoginForm;