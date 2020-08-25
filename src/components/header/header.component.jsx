import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {auth} from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import UserProfileIcon from "../user-icon/user-icon.component";
import UserDropdown from "../user-dropdown/user-dropdown.component";

import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser, selectUserDropdownHidden} from "../../redux/user/user.selector";

import './header.styles.css';
import logo from '../../assets/logos/iSkull-logo.png';

class Header extends React.Component{
    render()
    {
        const {currentUser, cartHidden, userDropdownHidden} = this.props;
        return (
            <div className="header">
                    <Link to="/" className="logo">
                        <img src = {logo} alt="logo"/>
                        <span className="logo-text">Mart</span>
                    </Link>
                
                <div className="options">
                    
                    <Link className="option" to="/shop">SHOP</Link>
                    <Link className="option" to="/shop">CONTACT</Link>
                    {
                        currentUser ? (
                        <div className="option" onClick={()=> auth.signOut()}>
                            SIGN OUT
                        </div>
                        )
                        : 
                        (<Link className="option" to="/signin">
                            SIGN IN
                        </Link>
                    )}
                    <UserProfileIcon />
                    <CartIcon />
                    
                </div>
                {cartHidden? null : <CartDropdown />}
                {console.log("1",userDropdownHidden)}
                {userDropdownHidden? null: <UserDropdown /> }
                
                
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden,
    userDropdownHidden: selectUserDropdownHidden
})
export default connect(mapStateToProps)(Header);