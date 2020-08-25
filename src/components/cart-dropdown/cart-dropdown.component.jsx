import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden, hideCart} from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.css";

class CartDropdown extends React.Component {
    componentDidMount(){
        document.addEventListener("click", this.handleClick, false);
    }
    componentWillUnmount(){
        document.removeEventListener("click",this.handleClick, false);
    }
    handleClick = event => {
        
        if (!ReactDOM.findDOMNode(this).contains(event.target)){
            this.props.hideCart()
        }
    }
    
    render(){
        const {cartItems, history, toggleCartHidden} = this.props;
        return (
            <div className="cart-dropdown">
                <div className="cart-items" >
                    {
                        cartItems.length ?
                            cartItems.map(cartItem =>(
                                <CartItem key={cartItem.id} item={cartItem}/>
                            )):
                            <span className="empty-message">Your Cart is Empty</span>
                    }

                </div>
                <CustomButton onClick ={()=> {
                    history.push("/checkout")
                    toggleCartHidden()
                    }}>
                    GO TO CHECKOUT
                </CustomButton>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = dispatch =>({
    toggleCartHidden : () => dispatch(toggleCartHidden()),
    hideCart : () => dispatch(hideCart())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));