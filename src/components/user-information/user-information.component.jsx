import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";


import UserAddressForm from "../user-address/user-address.component";

import {selectCurrentUser} from "../../redux/user/user.selector";

import "./user-information.styles.css";

class UserInformation extends React.Component {
        
    render(){
        const {currentUser} = this.props;
        return(
            <div className="user-information">
                <span className="info-heading">
                    Your Information
                </span>
                <div className="user-details">
                    <span className="name">{currentUser.displayName}</span>
                    <span className="email">{currentUser.email}</span>
                    <div className="address-container">
                        <UserAddressForm/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})
export default connect(mapStateToProps)(UserInformation);