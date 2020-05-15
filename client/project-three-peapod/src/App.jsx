
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/user'
import ProductsContainer from './components/ProductsContainer'
import Product from './components/Product'
import ProductEdit from './components/ProductEdit'
import './App.css'
import Footer from './components/shared/Footer'

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

  render() {
    // const { setUser, clearUser } = this
    // const { user } = this.state

    return (
      <>
        <div>
          <Switch>
            <Route exact path="/products">
              <ProductsContainer />
            </Route>
            <Route exact path="/product/:id" component={Product}>
            </Route>
            <Route exact path="/products/:id/edit" component={ProductEdit} />
          </Switch>
        </div>
        <Footer />
      </>
    )
  }
}
