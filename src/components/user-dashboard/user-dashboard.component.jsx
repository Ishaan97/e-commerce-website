import React from "react";
import {connect} from "react-redux";

import {showUserInformation, showOrderHistory} from "../../redux/user/user.actions";
import "./user-dashboard.styles.css";

class UserDashboard extends React.Component{
    render(){
        const {showUserInformation, showOrderHistory} = this.props;
        return(
            <div className="user-dashboard-container">
                <div className="options">
                    <span className="option" 
                    onClick = {() =>{
                        showUserInformation()
                    }}
                    >
                        User Information
                    </span>
                    <span className="option" 
                    onClick = {() =>{
                        showOrderHistory()
                    }}
                    >Order History</span>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    showUserInformation : () => dispatch(showUserInformation()),
    showOrderHistory : () => dispatch(showOrderHistory())
})

export default connect(null, mapDispatchToProps)(UserDashboard);