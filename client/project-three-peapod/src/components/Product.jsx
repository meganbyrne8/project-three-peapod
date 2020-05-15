import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getProduct, deleteProduct } from '../services/product'

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      image: '',
      description: '',
      _id: ''
    }
  }


  async componentDidMount() {
    const product = await getProduct(this.props.match.params.id)
    this.setState({
      title: product.title,
      image: product.image,
      description: product.description,
      _id: product._id
    })
  }


  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <img src={this.state.image} />
        <p>{this.state.description}</p>
        {/* Link to a post edit page that allows you to edit */}
        <Link to={`/products/${this.state._id}/edit`}>Edit</Link>
        {/* onClick= grab the deleteProduct function and pass it to the button, make sure this works */}
        <button>Delete</button>
      </div >
    )
  }
}
