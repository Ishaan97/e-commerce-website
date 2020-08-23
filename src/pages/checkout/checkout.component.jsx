import React from "react";

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import "./checkout.styles.css";

class Checkout extends React.Component{
    render(){
        const {cartItems, total} = this.props;
        return(
            <div className='checkout-page'>
                <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
                </div>
                {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <div className='total'>TOTAL: ${total}</div>
                <div className = "test-warning">
                    <span className="message">*Please use the following test credit card for payments*</span>
                    <span className="message">Credit Card Number : 4242 4242 4242 4242</span>
                    <span className="message">Expiry Date : Any Future Date</span>
                    <span className="message">CVV : Any 3 digit Number</span>
                </div>
                <StripeCheckoutButton className="pay" price={total} />
            </div>
                        
        );
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);