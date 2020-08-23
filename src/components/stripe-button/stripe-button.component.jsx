import React from "react";
import StripeCheckout from "react-stripe-checkout";

import logo from "../../assets/logos/iSkull-logo-black.png";

import "./stripe-button.styles.css";

class StripeCheckoutButton extends React.Component {
    onToken(token){
        console.log(token);
        alert("Payment Successful")
    }

    render(){
        const {price} = this.props;
        const priceForStripe = price*100;
        const publishableKey = "pk_test_51HIzhqHUpjXJWLO5k1i9ksq4iOa1lfyAw5xMHMf12yjVqbh17jDSSvZuk5bXLsn281jXXRozmfYg2TIt1G6YyBFt00Cjm22Bte"

        return(
            <StripeCheckout 
                label="Pay Now"
                name="iSkull Mart"
                // billingAddress
                // shippingAddress
                image={logo}
                description={`Your Total is $${price}`}
                amount={priceForStripe}
                panelLabel="Pay Now"
                token={this.onToken}
                stripeKey={publishableKey}
            />

        );
    }
}
export default StripeCheckoutButton;