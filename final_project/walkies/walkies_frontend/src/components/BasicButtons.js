import React from 'react';
import Walkies from './Walkies';
import LoginForm from './LoginForm';

const BasicButtons = () => {
    return (
        <>
            <button onClick={<Walkies showLoginBoxes />}>Login</button>
            <button>Register</button>
        </>
    )
}

export default BasicButtons;