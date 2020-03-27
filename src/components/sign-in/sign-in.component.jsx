import React from "react";

import "./sign-in.styles.css";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        };
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    handleSubmit = async event => {
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' })
        } catch (err) {
            alert(err.message);
        }
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <p>Sign in with your email and password.</p>
                <CustomInput
                    handleChange={this.handleChange}
                    name="email"
                    type="email"
                    label="Email"
                    value={this.state.email}
                />
                <CustomInput
                    handleChange={this.handleChange}
                    name="password"
                    type="password"
                    label="Password"
                    value={this.state.password}
                />
                <div className="buttons">
                    <CustomButton onClick={this.handleSubmit}>Sign In</CustomButton>
                    <CustomButton signInWithGoogle onClick={signInWithGoogle}>
                        Sign In with Google
                    </CustomButton>
                </div>
            </div>
        );
    }
}

export default SignIn;
