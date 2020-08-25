import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {hideUserDropdown} from "../../redux/user/user.actions";
import {selectShowUserInformation, selectShowResetPassword, selectShowOrderHistory} from "../../redux/user/user.selector";

import "./user-profile-content.styles.css";

class UserProfileContent extends React.Component{
    componentDidMount()
    {
        this.props.hideUserDropdown()
    }

    renderUserInformation(){
        return(
            <div>User Info</div>
        );
    }
    renderResetPassword(){
        return(
            <div>Reset Password</div>
        );
    }
    renderOrderHistory(){
        return(
            <div>Order History</div>
        );
    }
    render(){
        const {showUserInformation, showResetPassword, showOrderHistory} = this.props;
        console.log("this",showUserInformation)
        return(
            <div className="user-profile-content-container">
                {
                    
                    showUserInformation ? this.renderUserInformation()
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
    showUserInformation : selectShowUserInformation,
    showResetPassword : selectShowResetPassword,
    showOrderHistory : selectShowOrderHistory

})


export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContent);