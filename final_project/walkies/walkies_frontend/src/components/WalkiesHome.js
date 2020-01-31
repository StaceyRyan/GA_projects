import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const buttonStates = {
    showLogin: 1,
    showRegister: 2,
    // showOtherButton: 3,
    showBasicButtons: 4
}

class WalkiesHome extends React.Component {
    constructor() {
        super();

        this.state = {
            message: '',
            buttonState: buttonStates.showBasicButtons
        };

        //todo put bind stuff here
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(clickInfo){

        if(clickInfo === "login")
        {
            console.log("login");
            this.setState({
                buttonState: buttonStates.showLogin
            })
        }else{
            this.setState({
                buttonState: buttonStates.showRegister
            })
        }

    }

    render() {
        return (
            <>
                {this.state.buttonState === buttonStates.showBasicButtons && 
                            <>
                            <button onClick={() => this.handleButtonClick("login")}>Login</button>
                            <button onClick={() => this.handleButtonClick()}>Register</button>
                            </>}
                {this.state.buttonState === buttonStates.showLogin && <LoginForm/>}
                {this.state.buttonState === buttonStates.showRegister && <RegistrationForm/>}
            </>
        )
    }
}

export default WalkiesHome;