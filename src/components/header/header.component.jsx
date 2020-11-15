import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import UserProfileIcon from "../user-icon/user-icon.component";
import UserDropdown from "../user-dropdown/user-dropdown.component";

import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser, selectUserDropdownHidden} from "../../redux/user/user.selector";
import {signOutStart} from "../../redux/user/user.actions";

import './header.styles.css';
import logo from '../../assets/logos/iSkull-logo.png';

class Header extends React.Component{
    render()
    {
        const {currentUser, cartHidden, userDropdownHidden, signOutStart} = this.props;
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
                        <div className="option" onClick={signOutStart}>
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

const mapDispatchToProps = dispatch => ({
    signOutStart : ()=> dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);