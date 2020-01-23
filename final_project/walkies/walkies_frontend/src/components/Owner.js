import React from 'react';
import LoginForm from './LoginForm';

class Owner extends React.Component {
    constructor() {
        super();

        this.state = {
            revealLoginBoxes: false,
        };

        //todo put bind stuff here
        this.revealLoginBoxes = this.revealLoginBoxes.bind(this);
    }

    revealLoginBoxes() {
        console.log('reveal login boxes hit')
        this.setState({
            revealLoginBoxes: true,
        })
    }

    handlesShowDogButton = async () => {
        console.log('show a dog button pressed')
        const showDogs = await fetch('http://localhost:4000/dog/show_all')
    }


    render() {
        return (
            <>
                <button onClick={this.revealLoginBoxes}>Login</button>
                <button>Register</button>
                <div>
                    {this.state.revealLoginBoxes && <LoginForm />}
                </div>
            </>
        )
    }


}

export default Owner;