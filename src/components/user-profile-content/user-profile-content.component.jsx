import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import UserInformation from "../user-information/user-information.component";

import {hideUserDropdown} from "../../redux/user/user.actions";
import {selectCurrentUser ,selectShowUserInformation, selectShowResetPassword, selectShowOrderHistory} from "../../redux/user/user.selector";

import "./user-profile-content.styles.css";

class UserProfileContent extends React.Component{
    componentDidMount()
    {
        this.props.hideUserDropdown()
    }

    renderUserInformation(currentUser){
        return(
           <UserInformation/>
        );
    }
    renderResetPassword(){
        return(
            "Reset Password"
        );
    }
    renderOrderHistory(){
        return(
            "Order History"
        );
    }
    render(){
        const {currentUser, showUserInformation, showResetPassword, showOrderHistory} = this.props;
        return(
            <div className="user-profile-content-container">
                {
                    !currentUser ? "No User. Sign In "
                    : showUserInformation ? this.renderUserInformation()
                    : showResetPassword ? this.renderResetPassword()
                    : showOrderHistory ? this.renderOrderHistory() 
                    : "Nope"
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    hideUserDropdown : () => dispatch(hideUserDropdown())
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    showUserInformation : selectShowUserInformation,
    showResetPassword : selectShowResetPassword,
    showOrderHistory : selectShowOrderHistory

})


export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContent);