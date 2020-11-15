import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"

import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions"

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

    handleSubmit = async (event) =>{
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);
        
    }
    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]:value})

    }
    render()
    {
        const {googleSignInStart} = this.props;
        return (

            <div className="sign-in">
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit} className="form">
                    <FormInput 
                    name="email" 
                    type="email" 
                    label = "Email"
                    isGreyBackground
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
                        <CustomButton  type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google  </CustomButton>
                    </div>
                </form>     
                 
                <Link to="/register">
                    Dont have an account? Register Here 
                </Link>          
            </div>
            
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);