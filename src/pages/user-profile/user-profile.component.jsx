import React from "react";

import UserImage from "../../components/user-image/user-image.component";
import UserDashboard from "../../components/user-dashboard/user-dashboard.component";
import UserProfileContent from "../../components/user-profile-content/user-profile-content.component";

import {} from "../../redux/user/user.selector";

import "./user-profile.styles.css";

class UserProfile extends React.Component {
    render()
    {
        return(
            <div className="user-profile-page">
                <div className="left-navbar">
                    <div className="user-image">
                        <UserImage />
                    </div>
                    <div className="dashboard">
                        <UserDashboard />
                    </div>
                </div>
                <div className="user-content-container">
                    <div className="user-content">
                        <UserProfileContent/>
                    </div>
                        
                    
                </div>
            </div>
        )
    }

}
export default UserProfile;