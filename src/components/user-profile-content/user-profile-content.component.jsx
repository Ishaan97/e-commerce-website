import React from "react";
import {connect} from "react-redux";

import {hideUserDropdown} from "../../redux/user/user.actions";

import "./user-profile-content.styles.css";

class UserProfileContent extends React.Component{
    componentDidMount()
    {
        this.props.hideUserDropdown()
    }
    render(){
        return(
            <div className="user-profile-content-container">
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    hideUserDropdown : () => dispatch(hideUserDropdown())
})
export default connect(null, mapDispatchToProps)(UserProfileContent);