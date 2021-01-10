import React from "react";
import {connect} from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import logo from "../../assets/logos/iSkull-logo-black.png";
import {clearCart} from "../../redux/cart/cart.actions";
import {stripePaymentStart} from "../../redux/payment/payment.actions";

import "./stripe-button.styles.css";

const StripeCheckoutButton = ({ price, isDisabled, stripePaymentStart, clearCart }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HIzhqHUpjXJWLO5k1i9ksq4iOa1lfyAw5xMHMf12yjVqbh17jDSSvZuk5bXLsn281jXXRozmfYg2TIt1G6YyBFt00Cjm22Bte';
  
    const onToken = token => {

      let stripeData = {
        amount : priceForStripe,
        token : token
      }
      stripePaymentStart(stripeData); 
    };
    return (
      <StripeCheckout
        label='Pay Now'
        name='iSkull Mart'
        currency = "INR"
        // billingAddress
        // shippingAddress
        allowRememberMe={false}
        image={logo}
        description={`Your total is Rs. ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        disabled = {isDisabled}
      />
    );
  };
  
  const mapDispatchToProps = dispatch =>({
    clearCart : () => dispatch(clearCart()),
    stripePaymentStart : (stripeData) => dispatch(stripePaymentStart(stripeData))
  });
export default connect(null, mapDispatchToProps)(StripeCheckoutButton);