import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectOrderHistory} from "../../redux/user/user.selector";

import OrderHistoryItem from "../order-history-item/order-history-item.component";

import "./order-history.styles.css"

class OrderHistory extends React.Component{
    render(){
        const {orderHistory} = this.props;
        orderHistory.reverse();
        return(
        <div className="order-history-container">
            {
                orderHistory.map((order, i) => {
                    return(
                    <div className="order-history-item-container" key={i}>
                        <OrderHistoryItem key={i} item ={order.item} date={order.date} />
                    </div>
                    );
                })
            }
            
        </div>
    );
    }
}

const mapStateToProps = createStructuredSelector({
    orderHistory: selectOrderHistory
})
export default connect(mapStateToProps)(OrderHistory);