import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: props.username,
            password: props.password,
        };

        // this.loginUser = this.loginUser.bind(this);
    }

    // loginUser(){

    // }

    render() {
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
                <button>Login</button>
                {/* todo add login stuff here */}
            </>
        )
    }
}

export default LoginForm;