import React from "react";

import "./cart-item.styles.css";

class CartItem extends React.Component {
    render(){
        const {item:{imageUrl, price, name, quantity}} = this.props;
        return (
            <div className="cart-item">
                <img className="image" src = {imageUrl} alt="item" />
                <div className="item-details">
                    <span className="name">{name}</span>
                    <span className="price">{quantity}x ${price}</span>
                </div>
            </div>

        );
    }
}

export default CartItem;