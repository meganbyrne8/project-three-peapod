import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/user";
import Home from "./components/Home"
import ShoppingList from "./components/ShoppingList"
import ProductsContainer from "./components/ProductsContainer";
import Product from "./components/Product";
import ProductEdit from "./components/ProductEdit";
import ProductCreate from "./components/ProductCreate";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import "./App.css";
import Footer from "./components/shared/Footer";
import Nav from "./components/shared/navigation/Nav";
import BrowseHomePage from './components/BrowseHomePage'

import SideNavContainer from './components/SideNav/SideNavContainer'
import BrowseAisles from "./components/BrowseAisles";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      isLoaded: false,
    };
  }

  async componentDidMount() {
    console.log("componentDidMount");
    try {
      const user = await verifyUser();
      if (user) {
        this.setState(user);
      }
    } catch (err) {
      console.log(err.message);
    }
    this.setState({ isLoaded: true });
  }

  // setUser = user => this.setState({ user })
  // clearUser = () => this.setState({ user })
  setUser = (user) => this.setState({ user });
  clearUser = () => this.setState({ user: null });

  render() {
    // const { setUser, clearUser } = this
    // const { user } = this.state
    const { setUser, clearUser } = this;
    const { user, isLoaded } = this.state;

    return (
      <>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Home user={user} />} />
            <Route exact path="/" render={() => <SignIn />} />
            <Route exact path="/" render={() => <BrowseHomePage />} />
            <Route exact path="/" render={() => <SideNavContainer />} />
            <Route exact path="/" render={() => <BrowseAisles />} />
            <Route exact path="/browse" render={() => <BrowseHomePage />} />
            <Route exact path="/products">
              <ProductsContainer />
              {isLoaded && !user ? (
                <Redirect to="/signUp" />
              ) : (
                  <ProductCreate user={user} />
                )}
            </Route>
            <Route exact path="/products" render={() => <Nav user={user} />} />
            <Route exact path="/product/:id" component={Product}></Route>
            <Route exact path="/products/:id/edit" component={ProductEdit} />
            <Route
              exact
              path="/signIn"
              render={(props) => (
                <SignIn setUser={setUser} history={props.history} />
              )}
            />
            <Route exact path="/signUp" component={SignUp} />
            <Route
              exact
              path="/signOut"
              render={(props) => (
                <SignOut
                  user={user}
                  clearUser={clearUser}
                  history={props.history}
                />
              )}
            />
            <ShoppingList />
          </Switch>
        </div>
      </>
    );
  }
}
