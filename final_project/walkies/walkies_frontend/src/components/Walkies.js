import React from 'react';
import LoginForm from './LoginForm';
import BasicButton from './BasicButtons';

class Walkies_Human extends React.Component {
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
            showLoginBoxes: true,
        })
    }

    render() {
        return (
            <>
                <BasicButton />
            </>
        )
    }
}

export default Walkies_Human;