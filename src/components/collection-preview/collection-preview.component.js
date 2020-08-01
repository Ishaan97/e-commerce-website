import React from "react";

import './collection-preview.styles.css'

class CollectionPreview extends React.Component {
    render()
    {
        const {title, items} = this.props;
        return (
        <div className="collection-preview">
            <div>
            <h1 className="title">{title.toUpperCase()}</h1>
                <div className='preview'>
                    {
                        items
                        .filter((item, idx) => idx < 4)
                        .map((item) => (
                            <div key={item.id}>{item.name}</div>
                        ))
                    }

                </div>

            </div>
        </div>
        );
    }

}

export default CollectionPreview;