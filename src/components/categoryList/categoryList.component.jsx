import React from "react";
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"

import { selectCategoryListCategory } from "../../redux/categoryList/categoryList.selectors"

import Category from "../category/category.component";

import "./categoryList.styles.css";

class CategoryList extends React.Component {
    
    render()
    {
        const {categories} = this.props;
        return (
            <div >
            
                <div className="category-list">
                    {
                        categories.map(({id, ...otherCategoryProps}) => {
                            return <Category key={id} {...otherCategoryProps}/>
                        })
                    }

                </div>
            </div>
        );
    }
}
const mapSateToProps = createStructuredSelector({
    categories: selectCategoryListCategory
})

export default connect(mapSateToProps)(CategoryList);