import React from "react";

import CollectionItem from "../collection-item/collection-item.component"
import './collection-preview.styles.css'

class CollectionPreview extends React.Component {

    filterItems(items)
    {
        return items.filter((item, idx) => idx < 4)
    }
    render()
    {
        const {title, items} = this.props;
        return (
        <div className="collection-preview">
            <div>
            <h1 className="title">{title.toUpperCase()}</h1>
                <div className='preview'>
                    {
                        this.filterItems(items)
                        .map(({id, ...otherItemProps}) => (
                            <CollectionItem key={id} {...otherItemProps}/>
                        ))
                    }

                </div>

            </div>
        </div>
        );
    }

}

export default CollectionPreview;