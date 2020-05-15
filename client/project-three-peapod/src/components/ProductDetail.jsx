import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getProduct, deleteProduct } from '../services/product'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product = {
        title: '',
        description: '',
        image: '',
      }
    }
  }


  async componentDidMount() {
    let { id } = this.props.match.params
    const product = await getProduct(id)
    this.setState({ product })
  }


  render() {
    const { product } = this.state

    return (
      <div className="product-detail">
        <div>{product.title}</div>
        <div>{product.image}</div>
        <div>{product.description}</div>
        <div>{product._id}</div>
        <div className="button-container">
          <Button>Save</Button>
        </div>
      </div>
    )
  }
}

export default ProductDetail
