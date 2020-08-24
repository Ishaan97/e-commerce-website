import React from "react";

import "./user-dropdown.styles.css";

class UserDropdown extends React.Component{

    render()
    {
        return(
            <div className="user-dropdown">
                <div className="user-options">
                    <span className="option">Profile</span>
                    <span className="option">Order History</span>
                </div>
            </div>
        );
    }

}
export default UserDropdown;