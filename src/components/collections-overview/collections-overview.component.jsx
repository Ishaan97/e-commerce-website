import React from "react";
import {connect} from "react-redux";


import CollectionPreview from "../../components/collection-preview/collection-preview.component"
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector"

import {createStructuredSelector} from "reselect"


import "./collections-overview.styles.css";

class CollectionsOverview extends React.Component {
    render()
    {
        const {collections} = this.props;
        return (
            <div className="collections-overview">
                {
                    collections.map(({id, ...otherCollectionProps}) =>(
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }


            </div>
            
        );
    }
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);