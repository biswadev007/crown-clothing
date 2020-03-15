import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from "./pages/ShopPage/ShopPage.component";
import Header from "./components/Header/Header.component";
import SignInAndSignUp from "./pages/SignInAndSignUpPage/SignInAndSignUp.page";

import './App.css';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/sign-in' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
