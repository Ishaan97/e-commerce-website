import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import {connect} from "react-redux"

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignIn from "./pages/sign-in/sign-in.component";
import Register from "./pages/register/register.component";
import Checkout from "./pages/checkout/checkout.component";
import Footer from "./components/footer/footer.component";
import UserProfile from "./pages/user-profile/user-profile.component";

import {selectCurrentUser} from "./redux/user/user.selector";
import {checkUserSession} from "./redux/user/user.actions";

import {createStructuredSelector} from "reselect";


// import {auth, createUserProfileDocument} from "./firebase/firebase.utils"


import './App.css';




class App extends React.Component {
  
  unsubscribeFromAuth = null;
  
  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();

  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
     
  render(){
    return (
      <React.Fragment>
        <Header/>
        <div className="wrapper-content">
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/checkout' component={Checkout}/>
          <Route exact 
            path='/signin' 
            render = {() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ):(
                <SignIn/>
              )}
          />
          <Route exact 
            path='/register' 
            render = {() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ):(
                <Register/>
              )}
          />
          <Route path="/user-profile" component={UserProfile} />
        </Switch>

        </div>
        
        <Footer/>
      </React.Fragment>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession : ()=> dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
