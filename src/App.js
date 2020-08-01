import React from 'react';
import {Switch, Route} from 'react-router-dom'


import HomePage from "./pages/homepage/homepage.component";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const GroceriesPage = () => (
  <div>
      <h1>Grocery PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="body">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/groceries' component={GroceriesPage}/>
      </Switch>
    </div>
  );
}

export default App;
