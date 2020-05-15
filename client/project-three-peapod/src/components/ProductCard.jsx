import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  componentDidMount() {
    this.setState({
      url: '/product/' + this.props._id
    })
  }

  render() {
    return (
      <div>
        <Link to={this.state.url}>
          <h1>{this.props.title}</h1>
        </Link>
        <img src={this.props.image} />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Product
