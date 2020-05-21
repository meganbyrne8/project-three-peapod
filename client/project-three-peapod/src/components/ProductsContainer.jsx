import React, { Component } from "react";
import { getProducts } from "../services/product";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import "./ProductsContainer.css";
import Layout from "./shared/Layout";
import SideNavContainer from "./SideNav/SideNavContainer";
import BackMenuButton from "./ProductItemImages/BackMenuButton.png"

export default class ProductsContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const products = await getProducts();
    this.setState({ products });
  }

  render() {
    const populateProducts = this.state.products.map((product, index) => (
      <ProductCard
        _id={product._id}
        title={product.title}
        image={product.image}
        description={product.description}
        price={product.price}
        key={index}
      />
    ));

    return (
      <Layout>
        <div className="products-container">
          <header className="component-nav">
            <div className="close-out-button">
              <img src={BackMenuButton} className="back-button" />
            </div>
            <div className="section-title">
              <h3>Produce</h3>
            </div>
          </header>
          <div className="containter-div">
            <div className="headline">
              <div className="subhead">
                <h2>Top Selling Produce on Sale</h2>
              </div>
              <div className="view-all">
                <Link to="/" className="plus-sign">
                  <span>&#43;</span>
                </Link>
                <h2>View All ></h2>
              </div>
            </div>
            <div className="entire-middle-section">
              <div className="side-nav-section">
                <SideNavContainer />
              </div>
              <div className="main-section">
                <div className="product-gallery">{populateProducts}</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
