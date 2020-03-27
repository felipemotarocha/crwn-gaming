import React from "react";

import "./sign-up.styles.css";

import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: '',
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async event => {
        event.preventDefault();

        const { name, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName: name })

            this.setState({
                name: "",
                email: "",
                password: "",
                confirmPassword: '',
            })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { name, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <p>Sign up now.</p>
                <CustomInput
                    type="text"
                    name="name"
                    label="Name"
                    value={name}
                    handleChange={this.handleChange}
                />
                <CustomInput
                    type="email"
                    name="email"
                    label="Email"
                    value={email}
                    handleChange={this.handleChange}
                />
                <CustomInput
                    type="password"
                    name="password"
                    label="Password"
                    value={password}
                    handleChange={this.handleChange}
                />
                <CustomInput
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    value={confirmPassword}
                    handleChange={this.handleChange}
                />

                <div className="buttons">
                    <CustomButton type="submit" onClick={this.handleSubmit}>Sign Up</CustomButton>
                </div>
            </div>
        );
    }
}

export default SignUp;
