import React from 'react';

import './custom-button.styles.css';

class CustomButton extends React.Component {
    render(){
        const {children, ...otherProps} = this.props;
        return(
            <button className="custom-button" {...otherProps}>
                {children}
            </button>

        );
    }

}

export default CustomButton;