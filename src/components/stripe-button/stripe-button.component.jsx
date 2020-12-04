import React from "react";
import StripeCheckout from "react-stripe-checkout";

import axios from 'axios';

import logo from "../../assets/logos/iSkull-logo-black.png";

import "./stripe-button.styles.css";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HIzhqHUpjXJWLO5k1i9ksq4iOa1lfyAw5xMHMf12yjVqbh17jDSSvZuk5bXLsn281jXXRozmfYg2TIt1G6YyBFt00Cjm22Bte';
  
    const onToken = token => {
      axios({
        url: 'http://localhost:5000/payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token: token
        }
      })
        .then(response => {
          alert('succesful payment');
        })
        .catch(error => {
          console.log('Payment Error: ', error);
          alert(
            'There was an issue with your payment! Please make sure you use the provided credit card.'
          );
        });
    };
  
    return (
      <StripeCheckout
        label='Pay Now'
        name='iSkull Mart'
        currency = "INR"
        // billingAddress
        // shippingAddress
        image={logo}
        description={`Your total is Rs. ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
  };
  
  export default StripeCheckoutButton;