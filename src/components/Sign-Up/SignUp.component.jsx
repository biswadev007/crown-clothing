import React, { Component } from 'react';
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.action"

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';

import './SignUp.style.scss';

class SignUp extends Component {
constructor(props){
    super(props);
    this.state= {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
}

handleSubmit = async event =>{
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword){
        return alert("Password don't match");
    }
    signUpStart({ displayName, email, password });
} 

handleChange = event => {
    let {value, name} = event.target;
    this.setState({[name]: value});
}

    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name="displayName" 
                        type="text"
                        handleChange={this.handleChange}
                        label="Display Name"  
                        value={displayName} 
                        required 
                    />
                        <FormInput
                        name="email" 
                        type="email"
                        handleChange={this.handleChange}
                        label="Email"  
                        value={email} 
                        required 
                    />
                        <FormInput
                        name="password" 
                        type="password"
                        handleChange={this.handleChange}
                        label="Password"  
                        value={password} 
                        required 
                    />
                        <FormInput
                        name="confirmPassword" 
                        type="password"
                        handleChange={this.handleChange}
                        label="Retype-Password"  
                        value={confirmPassword} 
                        required 
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials)) 
})

export default connect(null, mapDispatchToProps)(SignUp);