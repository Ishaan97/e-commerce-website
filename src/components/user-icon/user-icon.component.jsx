import React from 'react';
import {connect} from "react-redux";

import {toggleUserDropdownHidden} from "../../redux/user/user.actions";

import {ReactComponent as User} from "../../assets/images/user.svg";

import "./user-icon.styles.css";


class UserProfileIcon extends React.Component{
    
    render(){
        const {toggleUserDropdownHidden} = this.props;
        return (
            <div className="user-profile-icon" onClick={toggleUserDropdownHidden}>
                <User className="user-icon"/>
            </div>

        );
    }
}
const mapDispatchToProps = dispatch => ({
    toggleUserDropdownHidden : () => dispatch(toggleUserDropdownHidden())
})
export default connect(null,mapDispatchToProps )(UserProfileIcon);