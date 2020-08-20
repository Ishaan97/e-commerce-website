import React from "react";

import "./checkout-item.styles.css";

class CheckoutItem extends React.Component{
    render(){
        const {cartItem: { name, imageUrl, price, quantity }} = this.props;
        return(
            <div className='checkout-item'>
                <div className='image-container'>
                    <img className="image" src={imageUrl} alt='item' />
                </div>
                <span className='name'>{name}</span>
                <span className='quantity'>{quantity}</span>
                <span className='price'>{price}</span>
                <div className='remove-button'>&#10005;</div>
            </div>

        );
    }

}
export default CheckoutItem;