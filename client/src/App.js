import React, { Component, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.component";
import Header from "./components/Header/Header.component";

import { GlobalStyle } from "./Global.styled";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action"

const HomePage = lazy(() => import("./pages/HomePage/HomePage.component"));
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage.component"));
const SignInAndSignUp = lazy(() => import("./pages/SignInAndSignUpPage/SignInAndSignUp.page"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage/checkoutPage.component"));
const AboutUs = lazy(() => import("./components/AboutUs/about.component"));

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route path='/about' component={AboutUs} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
