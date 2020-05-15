import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/user";
import ProductsContainer from "./components/ProductsContainer";
import Product from "./components/Product";
import ProductEdit from "./components/ProductEdit";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";
import "./App.css";
import Footer from "./components/shared/Footer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  // async componentDidMount() {
  //   const user = await verifyUser()
  //   if (user) {
  //     this.setState(user)
  //   }
  // }

  // setUser = user => this.setState({ user })
  // clearUser = () => this.setState({ user })
  setUser = (user) => this.setState({ user });
  clearUser = () => this.setState({ user: null });

  render() {
    // const { setUser, clearUser } = this
    // const { user } = this.state
    const { setUser, clearUser } = this;
    const { user } = this.state;

    return (
      <>
        <div>
          <Switch>
            <Route exact path="/products">
              <ProductsContainer />
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
        <Footer />
      </>
    );
  }
}
