import React from "react";
import {withRouter} from 'react-router-dom';


import './category.styles.css';

class Category extends React.Component {
    render()
    {
        const {title, imageUrl, history, linkUrl, match} = this.props;
        return (
                <div 
                onClick={()=> history.push(`${match.url}${linkUrl}`)}
                style={{
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

export default withRouter(Category);