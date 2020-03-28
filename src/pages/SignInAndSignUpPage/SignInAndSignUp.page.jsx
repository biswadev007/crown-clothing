import React from 'react';

import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/Sign-Up/SignUp.component";

import "./SignInAndSignUp.style.scss";

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp;