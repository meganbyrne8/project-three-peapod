import React, { Component } from 'react'
import { getProducts } from '../services/product'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import "./ProductsContainer.css"


export default class ProductsContainer extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const products = await getProducts()
    this.setState({ products })
  }

  render() {
    const populateProducts = this.state.products.map((product, index) => (
      <ProductCard _id={product._id} title={product.title} image={product.image} description={product.description} key={index} />
    ))


    return (
      <div>
        <header className="component-nav">Produce
        <span className="close-out-button">X</span>
        </header>
        <h2>Top Selling Produce on Sale</h2>
        <div className="containter-div">
          {populateProducts}
        </div>
        <div className="add-button">
          <Link to='/products'>ADD</Link>
        </div>
      </div >
    )
  }
}
