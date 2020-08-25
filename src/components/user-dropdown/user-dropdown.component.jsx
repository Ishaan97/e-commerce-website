import React from "react";
import ReactDOM from "react-dom";

import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import {hideUserDropdown, showUserInformation, showOrderHistory} from "../../redux/user/user.actions";


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
            this.props.hideUserDropdown();
        }
    }
    render()
    {
        const {showUserInformation, showOrderHistory, history} = this.props;
        return(
            <div className="user-dropdown">
                <div className="user-options">                    
                    <span 
                    className="option"
                    onClick = {() =>{
                        history.push("/user-profile")
                        showUserInformation()
                    }}
                    >
                        Your Profile
                    </span>
                    <span 
                    className="option"
                    onClick = {() =>{
                        history.push("/user-profile")
                        showOrderHistory()
                    }}
                    >
                        Order History
                    </span>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    hideUserDropdown : () => dispatch(hideUserDropdown()),
    showUserInformation : () => dispatch(showUserInformation()),
    showOrderHistory : () => dispatch(showOrderHistory())
})
export default withRouter(connect(null, mapDispatchToProps)(UserDropdown));