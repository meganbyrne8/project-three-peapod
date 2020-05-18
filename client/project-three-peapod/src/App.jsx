import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/user";
import ProductsContainer from "./components/ProductsContainer";
import Product from "./components/Product";
import ProductEdit from "./components/ProductEdit";
import ProductCreate from "./components/ProductCreate";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import "./App.css";
import Home from './components/Home';
import Footer from "./components/shared/Footer";
// import LandingNav from "./components/shared/navigation/LandingNav";


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
            {/* <LandingNav /> */}
          <Route exact path="/" render={() => <Home user={user} />} />
            <Route exact path="/products">
              <ProductsContainer />
              {isLoaded && !user ? (
                <Redirect to="/signUp" />
              ) : (
                <ProductCreate user={user} />
              )}
            </Route>
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
          </Switch>
        </div>
      </>
    );
  }
}
