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

    navSlide = () => {
        const burger = document.querySelector(".nav-burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");

        // toggle nav
        nav.classList.toggle("nav-active");
        // animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })

        burger.classList.toggle("burger-toggle")
    }

    render()
    {
        const {currentUser, cartHidden, userDropdownHidden, signOutStart} = this.props;
        return (
            <nav className="header">
                    <Link to="/" className="logo">
                        <img src = {logo} alt="logo"/>
                        <span className="logo-text">Mart</span>
                    </Link>

                    <div className="nav-links">
                        <Link to="/shop" onClick={this.navSlide}><li>SHOP</li></Link>
                        {
                            currentUser? (
                                <li>
                                    <div onClick={signOutStart}>SIGN OUT</div>
                                    
                                </li>
                            ) : (
                                <Link to="/signin" onClick={this.navSlide}>
                                    <li>SIGN IN</li>
                                </Link>
                            )
                        }
                        <li><UserProfileIcon /></li>
                        <li><CartIcon /></li>
                    </div>
                    <div className="nav-burger" onClick={this.navSlide}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                {cartHidden? null : <CartDropdown />}
                {userDropdownHidden? null: <UserDropdown /> }
            </nav>
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