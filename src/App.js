import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from "./pages/ShopPage/ShopPage.component";
import Header from "./components/Header/Header.component";
import SignInAndSignUp from "./pages/SignInAndSignUpPage/SignInAndSignUp.page";

import './App.css';
import { auth,createProfileData } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createProfileData(userAuth)
        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
            currentUser:{
              id: snapshot.id,
            ...snapshot.data()
            }
          })
        });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
