import React from 'react';

import "./checkout-error-message.styles.css"

class CheckoutErrorMessage extends React.Component{

    render()
    {
        const {message} = this.props;
        return (
            <React.Fragment>
                {
                    message ? (
                        <div className ="checkout-error-container">
                            {message}
                        </div>
                    ) : null
                }
            </React.Fragment>           
        );
    }
}

export default CheckoutErrorMessage;