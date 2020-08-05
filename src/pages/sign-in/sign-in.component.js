import React from "react";

import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"

import './sign-in.styles.css'



class SignIn extends React.Component {
    constructor()
    {
        super();
        this.state = {
            email: "",
            password:""
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({email:'', password:''});
    }
    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]:value})

    }
    render()
    {
        return (

            <div className="sign-in">
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit} className="form">
                    <FormInput 
                    name="email" 
                    type="email" 
                    label = "Email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                    required/>
                    
                    <FormInput 
                    name="password" 
                    type="password" 
                    label="Password"
                    value={this.state.password} 
                    onChange={this.handleChange}
                    required/>
                    
                    <div className="buttons">
                    <CustomButton  type="submit">Sign In  </CustomButton>
                    </div>
                </form>     
                Dont have an account ? 
                Register Here           
            </div>
            
        );
    }
}

export default SignIn;