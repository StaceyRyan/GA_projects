import React from 'react';
import LoginForm from './LoginForm';

class Walkies extends React.Component {
    constructor() {
        super();

        this.state = {
            showLoginBoxes: false,
            showBasicButtons: true
        };

        //todo put bind stuff here
        this.showLoginBoxes = this.showLoginBoxes.bind(this);
    }

    showLoginBoxes() {
        console.log('reveal login boxes hit')
        const RevealedLoginForm = <LoginForm />
        this.setState({
            showLoginBoxes: RevealedLoginForm,
        })
    }

    render() {
        return (
            <>
                <button onClick={this.showLoginBoxes}>Login</button>
                <button>Register</button>
            </>
        )
    }


}

export default Walkies;