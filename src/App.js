import React from 'react';
import {Switch, Route} from 'react-router-dom'


import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignIn from "./pages/sign-in/sign-in.component"
import Register from "./pages/register/register.component"


import './App.css';




function App() {
  return (
    <div className="body">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/register' component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
