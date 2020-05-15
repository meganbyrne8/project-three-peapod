import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/user'
import './App.css'
import Footer from './components/shared/Footer'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
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
        Hello World!
      </div>
      <Footer />
      </>
    )
  }
}
