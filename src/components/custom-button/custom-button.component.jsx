import React from "react";

import "./custom-button.styles.css";

const CustomButton = ({ children, signInWithGoogle, inverted, ...otherProps }) => (
    <div>
        <button
            {...otherProps}
            className={`custom-button ${
                signInWithGoogle ? "sign-in-with-google" : ""
                } ${inverted ? 'inverted' : ''}`}
        >
            {children}
        </button>
    </div>
);

export default CustomButton;
