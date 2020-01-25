import React from 'react';
import LoginForm from './LoginForm';

const BasicButtons = () => 
{
    const handleLoginButton = () => 
    {
        console.log("login button hit");
        if (BasicButtons.hidden === true) 
        {
            BasicButtons.hidden = false;
            console.log("basic button if part 1")
        } else 
        {
            BasicButtons.hidden = true;
            console.log("basicbutton if part else")

        }
        return (<LoginForm />);
    };
        return (
            <>
                <button onClick={handleLoginButton}>Login</button>
                <button>Register</button>
            </>
        )
}

export default BasicButtons;