import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"

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
      <div className="product-cards">
        <Link to={this.state.url}>
          <img src={this.props.image} />
        </Link>
        <h5>{this.props.title}</h5>
        <p>{this.props.description}</p>
        <div className="price-button-div">
          <p className="price-lower">Temp Price</p>
          <button className="add-to-cart">Add To Cart</button>
        </div>
      </div>
    )
  }
}

export default Product
