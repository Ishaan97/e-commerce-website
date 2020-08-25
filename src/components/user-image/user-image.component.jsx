import React from "react";

import {ReactComponent as UserIcon} from "../../assets/images/user.svg";

import "./user-image.styles.css";
class UserImage extends React.Component{

    render(){
        return(
            <div className="user-image-container">
                    <UserIcon className="user-image-icon"/>
            </div>
        );
    }

}

export default UserImage;