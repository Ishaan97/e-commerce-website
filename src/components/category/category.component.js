import React from "react";


import './category.styles.css';

class Category extends React.Component {
    render()
    {
        const {title, imageUrl,} = this.props;
        return (
            <div style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className="category-item">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        );
    }
}

export default Category;