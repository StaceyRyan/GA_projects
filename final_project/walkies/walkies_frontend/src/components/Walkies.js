import React from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const formStates = {
    showLogin: 1,
    showRegister: 2,
    showAnotherOption: 3,
    showBasicButtons: 4
}

class WalkiesHuman extends React.Component {
    constructor() {
        super();

        this.state = {
            message: '',
            formState: formStates.showBasicButtons
        };

        //todo put bind stuff here
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(clickInfo){

        if(clickInfo === "login")
        {
            console.log("login");
            this.setState({
                formState: formStates.showLogin
            })
        }else{
            this.setState({
                formState: formStates.showRegister
            })
        }

    }


    render() {
        return (
            <>
                {this.state.formState === formStates.showBasicButtons && 
                            <>
                            <button onClick={() => this.handleButtonClick("login")}>Login</button>
                            <button onClick={() => this.handleButtonClick()}>Register</button>
                            </>}
                {this.state.formState === formStates.showLogin && <LoginForm/>}
                {this.state.formState === formStates.showRegister && <RegistrationForm/>}

            </>
        )
    }
}

export default WalkiesHuman;