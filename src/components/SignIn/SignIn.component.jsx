import React, { Component } from 'react';
import {signInWithGoogle} from '../../firebase/firebase.utils';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import './SignIn.style.scss';

class SignIn extends Component {
constructor(props) {
    super(props)
    this.state ={
        email: '',
        password: ''
    }
}

handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''})
}

handleChange = event => {
    let {value, name} = event.target;
    this.setState({[name]: value});
}

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email"
                        handleChange={this.handleChange}
                        label="email"  
                        value={this.state.email} 
                        required 
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        label="password" 
                        value={this.state.password} 
                        required 
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;