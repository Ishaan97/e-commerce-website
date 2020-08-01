import React from "react";

import CategoryList from "../../components/categoryList/categoryList.component"
import './homepage.styles.css'

class HomePage extends React.Component {
    render()
    {
        return (
            <main className="homepage-main">
                <CategoryList/>
            </main>
            
        );
    }
}

export default HomePage;