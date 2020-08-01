import React from "react";

import Category from "../category/category.component";

import "./categoryList.styles.css";

class CategoryList extends React.Component {
    constructor(){
        super();
        
        this.state = {
            categories :[
                {
                    title:"Groceries",
                    imageUrl : "https://thumbs.dreamstime.com/b/young-girl-holds-full-paper-bag-groceries-white-wooden-background-above-top-view-flat-lay-young-girl-holds-full-paper-117080551.jpg",
                    id :1,
                    linkUrl: "groceries"
                },
                {
                    title:"Mobiles",
                    imageUrl : "https://uswitch-mobiles-contentful.imgix.net/qhi9fkhtpbo3/3N5bH3FCJym48O6AOcM0wO/323220d01f30efd281c2a4a136dd2154/history-of-mobile-phones.jpg",
                    id :2,
                    linkUrl: "hats"
                },
                {
                    title:"Clothes",
                    imageUrl : "https://ensightskills.org/wp-content/uploads/2017/12/fashionable_women_icons_colored_cartoon_design_6830012.jpg",
                    id :3,
                    linkUrl: "hats"
                },
                {
                    title:"Books",
                    imageUrl : "https://images.indianexpress.com/2020/04/books_759.jpg",
                    id :4,
                    linkUrl: "hats"
                },
                {
                    title:"Furniture",
                    imageUrl : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg",
                    id :5,
                    linkUrl: "hats"
                }
            ]
        }
    }
    render()
    {

        return (
            <div >
            
                <div className="category-list">
                    {
                        this.state.categories.map(({id, ...otherCategoryProps}) => {
                            return <Category key={id} {...otherCategoryProps}/>
                        })
                    }

                </div>
            </div>
        );
    }
}

export default CategoryList;