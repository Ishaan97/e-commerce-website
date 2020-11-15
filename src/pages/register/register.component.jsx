import React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"

import {signUpStart} from "../../redux/user/user.actions"

import './register.styles.css'


class Register extends React.Component {
    constructor()
    {
        super();
        this.state = {
            displayName: "",
            email:"",
            password:"",
            confirmPassword:""
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {signUpStart} = this.props;
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert("Passwords dont match");
            return;
        }

        signUpStart({displayName, email, password});

    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }
    render()
    {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="register">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit} className="form">
                    <FormInput 
                        name="displayName" 
                        type="text" 
                        label = "Name"
                        value={displayName} 
                        onChange={this.handleChange}
                        required/>

                    <FormInput 
                        name="email" 
                        type="email" 
                        label = "Email"
                        value={email} 
                        onChange={this.handleChange}
                        required/>

                    <FormInput 
                        name="password" 
                        type="password" 
                        label = "Password"
                        value={password} 
                        onChange={this.handleChange}
                        required/>

                    <FormInput 
                        name="confirmPassword" 
                        type="password" 
                        label = "Confirm Password"
                        value={confirmPassword} 
                        onChange={this.handleChange}
                        required/>

                    <div className="buttons">
                        <CustomButton  type="submit">Register</CustomButton>
                    </div>
                </form>
                
                
                <Link to="/signin">
                    Already have an account? Sign In Here
                </Link>    
            </div>
            
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart : userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(Register);