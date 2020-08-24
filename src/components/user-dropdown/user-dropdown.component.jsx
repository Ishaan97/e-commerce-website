import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";

import {userDropdownClickedOutside} from "../../redux/user/user.actions";
import "./user-dropdown.styles.css";

class UserDropdown extends React.Component{

    componentDidMount(){
        document.addEventListener("click", this.handleClick, false);
    }
    componentWillUnmount(){
        document.removeEventListener("click",this.handleClick, false);
    }
    handleClick = event => {
        
        if (!ReactDOM.findDOMNode(this).contains(event.target)){
            this.props.userDropdownClickedOutside();
        }
    }
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

const mapDispatchToProps = dispatch => ({
    userDropdownClickedOutside : () => dispatch(userDropdownClickedOutside())
})
export default connect(null, mapDispatchToProps)(UserDropdown);