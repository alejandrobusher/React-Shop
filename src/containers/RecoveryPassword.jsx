import React from 'react';
import "../styles/RecoveryPassword.scss"

const RecoveryPassword = () => {
    return (
        <div classname="login">
            <div classname="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" classname="logo" />
                <h1 classname="title">Email has been sent!</h1>
                <p classname="subtitle">Please check your inbox for instructions on how to reset the password</p>
                <div classname="email-image">
                <img src="./icons/email.svg" alt="email" />
                </div>
                <button classname="primary-button login-button">Login</button>
                <p classname="resend">
                <span>Didn't receive the email?</span>
                <a href="/">Resend</a>
                </p>
            </div>
        </div>
    );
}

export default RecoveryPassword;
