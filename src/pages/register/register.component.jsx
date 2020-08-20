import React from "react";
import {Link} from 'react-router-dom';

import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils"

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
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert("Passwords dont match");
            return;
        }
        console.log("handle submit");
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: "",
                email:"",
                password:"",
                confirmPassword:""
            })
        }catch(error){
            console.error(error);
        }


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

export default Register;