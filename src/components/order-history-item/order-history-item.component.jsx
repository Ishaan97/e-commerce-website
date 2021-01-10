import React from 'react';

import "./order-history-item.styles.css"

class OrderHistoryItem extends React.Component{
    render(){
        const {item, date} = this.props;
        return(
            <React.Fragment>
                <div className="order-item">
                    <img src={item.imageUrl} alt="Order Item" className="order-image"/>
                    <div className="order-item-info">
                        <div className="item-name">
                            {item.name}
                        </div>
                        <div className="item-price">
                            Total : Rs. {item.price * item.quantity}
                        </div>
                        <div className="item-quantity">
                            Quantity : {item.quantity}
                        </div>
                        <div className="date">
                            Order Date : {date}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        
        
    );
    }
}

export default OrderHistoryItem;