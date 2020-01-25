import React, { useState } from 'react';
import LoginForm from './LoginForm';
import BasicButtons from './BasicButtons';
import App from '../App';

const Walkies_Human = () => 
{
    const [basicButtons, loginForm] = useState(App);

    const renderBasicButtons = () => 
    {
        let basicButtons = <BasicButtons />
        return basicButtons;
    }

        return (
            <>
                {renderBasicButtons()}
            </>
        )}

export default Walkies_Human;