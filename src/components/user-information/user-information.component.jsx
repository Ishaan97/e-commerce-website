import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import CustomButton from "../custom-button/custom-button.component";

import {selectCurrentUser} from "../../redux/user/user.selector";

import "./user-information.styles.css";

class UserInformation extends React.Component {
    
    renderAddress(){
        return(
            <React.Fragment>
                <span>{this.props.currentUser.address}</span>
                <CustomButton>Edit Address</CustomButton>
            </React.Fragment>
        );
    }
    renderNoAddress(){
        return(
            <React.Fragment>
                <span className="address">No address</span>
                <CustomButton>Add Address</CustomButton>
            </React.Fragment>  
        );
    }
    
    render(){
        const {currentUser} = this.props;
        return(
            <div className="user-information">
                <span className="heading">
                    Your Information
                </span>
                <div className="user-details">
                    <span className="name">{currentUser.displayName}</span>
                    <span className="email">{currentUser.email}</span>
                    <div className="address-container">
                        {
                            currentUser.address? this.renderAddress()
                            : this.renderNoAddress()
                        }
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