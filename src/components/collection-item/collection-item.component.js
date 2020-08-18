import React from 'react';

import CustomButton from "../custom-button/custom-button.component";

import './collection-item.styles.css';

class CollectionItem extends React.Component { 
    render()
    {
        const {name, price, imageUrl} = this.props;
        return(
            <div className="collection-item">
                <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`

                }}>
                </div>
                <div className="collection-footer">
                    <span className="name">{ name }</span>
                    <span className="price">{price}</span>
                </div>
                <CustomButton inverted>Add To Cart</CustomButton>

            </div>

        );
    }
}

export default CollectionItem;