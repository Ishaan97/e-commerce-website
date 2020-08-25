import React from "react";

import "./user-dashboard.styles.css";

class UserDashboard extends React.Component{
    render(){
        return(
            <div className="user-dashboard-container">
                <div className="options">
                    <span className="option">Basic Information</span>
                    <span className="option">Reset Password</span>
                    <span className="option">Order History</span>
                </div>
            </div>
        );
    }
}

export default UserDashboard;