import React from "react";
import ReactDOM from "react-dom";

import {withRouter, Link} from "react-router-dom";
import {connect} from "react-redux";

import {hideUserDropdown} from "../../redux/user/user.actions";
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
        return(
            <div className="user-dropdown">
                <div className="user-options">                    
                    <span className="option">
                        <Link to="/user-profile">Profile</Link>
                    </span>
                    <span className="option">
                        <Link to="/user-profile">Order History</Link>
                    </span>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    hideUserDropdown : () => dispatch(hideUserDropdown())
})
export default withRouter(connect(null, mapDispatchToProps)(UserDropdown));