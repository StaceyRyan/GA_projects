import React from 'react';
import DogButtons from './DogButtons';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            preferredName: '',
            email: '',
            phoneNumber: '',
            submitDisabled: true
        };
        this.handleKeyStrike = this.handleKeyStrike.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
    }

    handleKeyStrike(event) {
        const keystrike = event.target.name;
        const value = event.target.value;
        this.setState({ [keystrike]: value });

        if (this.state.username &&
            this.state.password &&
            this.state.preferredName &&
            this.state.email &&
            this.state.phoneNumber) {
            this.setState({
                submitDisabled: false
            })
        }
        else {
            this.setState({
                submitDisabled: true
            })
        }
    }

    handleSubmitButton = async () => {
        console.log('handle registration form submit button')

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "username": this.state.username,
            "password": this.state.password,
            "preferredName": this.state.preferredName,
            "email": this.state.email,
            "phoneNumber": this.state.phoneNumber
        });

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
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                </div>
                <div className={"form-group"}>
                    <label>
                        Preferred Name:
                        <input type="text" name="preferredName"
                            value={this.state.preferredName}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                </div>
                <label>
                    Password:
                        <input type="text" name="password"
                        value={this.state.password}
                        className={"form-control"}
                        onChange={this.handleKeyStrike} />
                </label>
                <div className={"form-group"}>
                    <label>
                        Email:
                        <input type="text" name="email"
                            value={this.state.email}
                            className={"form-control"}
                            onChange={this.handleKeyStrike} />
                    </label>
                    <div className={"form-group"}>
                        <label>
                            Phone Number:
                        <input type="number" name="phoneNumber"
                                value={this.state.phoneNumber}
                                className={"form-control"}
                                onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                    <p>Please indicate if you are a dog owner or a dog walker.</p>
                    <div className={"form-group"}>
                        <label>Dog Parent:
                            <input type="radio"
                            checked={true} 
                            name="userRole"
                            value="owner"
                            onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                    <div className={"form-group"}>
                        <label>Dog Walker:
                            <input type="radio"
                            name="userRole"
                            value="walker"
                            onChange={this.handleKeyStrike} />
                        </label>
                    </div>
                </div>
                <button onClick={this.handleSubmitButton} disabled={this.state.submitDisabled}>Submit</button>

            </>
        )
    }
}

export default RegistrationForm;