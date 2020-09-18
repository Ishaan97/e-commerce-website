import React from 'react';

import "./address-item.styles.css";


class AddressItem extends React.Component{
    render(){
        const {label, value, handleChange, ...otherProps} = this.props;
        return(
            <div className="address-item">
                <label className="address-label">{label}</label>
                <div className="address-input">
                    <input
                        type="text"
                        defaultValue={value}
                        onChange={handleChange}
                        required
                        {...otherProps}
                    />
                </div>
            </div>
        );
    }
}
export default AddressItem;