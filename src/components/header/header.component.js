import React from 'react';
import {Link} from 'react-router-dom';

import {connect} from "react-redux"

import {auth} from "../../firebase/firebase.utils"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

import './header.styles.css';
import logo from '../../assets/logos/iSkull-logo.png';

class Header extends React.Component{
    render()
    {
        const {currentUser, hidden} = this.props;
        return (
            <div className="header">
                    <Link to="/" className="logo">
                        <img src = {logo} alt="logo"/>
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
                    <CartIcon />
                </div>
                {hidden? null : <CartDropdown />}
                
            </div>
        );
    }
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser: currentUser,
    hidden: hidden
})
export default connect(mapStateToProps)(Header);