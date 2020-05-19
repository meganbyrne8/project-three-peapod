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
      <ProductCard _id={product._id} title={product.title} image={product.image} description={product.description} price={product.price} key={index} />
    ))


    return (
      <div className="products-container">
        <header className="component-nav">
          Produce
          <div className="close-out-button">
            <span>&lt;</span>
          </div>
        </header>
        <div className="containter-div">
          <div className="headline">
            <div className="subhead">
              <h2>Top Selling Produce on Sale</h2>
            </div>
            <div className="view-all">
              <h2>View All ></h2>
            </div>
          </div>
          <div className="product-gallery">
            {populateProducts}
          </div>
        </div>
        <div className="add-button">
          <Link to='/products'>ADD</Link>
        </div>
      </div >
    )
  }
}
