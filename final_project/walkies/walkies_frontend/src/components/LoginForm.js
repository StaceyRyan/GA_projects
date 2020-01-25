import React from 'react';
import Dog from './Dog';

const LoginForm = () => {
    
    // loginUser(){

    // }

        return (
            <>
                <div className={"form-group"}>
                    <label>
                        Username:
                        <input type="text" name="username"
                            value={this.state.username}
                            className={"form-control"} />
                    </label>
                </div>
                <label>
                    Password:
                        <input type="text" name="password"
                        value={this.state.password}
                        className={"form-control"} />
                </label>
                <button>Enter</button>
                {/* todo add login stuff here */}
            </>
        )
}

export default LoginForm;