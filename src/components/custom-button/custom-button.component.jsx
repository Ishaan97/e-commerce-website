import React from 'react';

import './custom-button.styles.css';

class CustomButton extends React.Component {
    render(){
        const {children, isGoogleSignIn, inverted, ...otherProps} = this.props;
        return(
            <button 
            className={`${isGoogleSignIn?'google-sign-in': ''}
            ${inverted?'inverted': ''}
             custom-button`} {...otherProps}>
                {children}
            </button>

        );
    }

}

export default CustomButton;