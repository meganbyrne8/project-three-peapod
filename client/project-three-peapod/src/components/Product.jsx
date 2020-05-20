import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getProduct, deleteProduct } from '../services/product'
import Layout from "./shared/Layout"
import ShoppingList from "./ProductItemImages/ShoppingList.png"
import Rating from "./ProductItemImages/Rating.png"
import Small_Chat from "./ProductItemImages/Small_Chat.png"
import nutrition_reviews from "./ProductItemImages/nutrition_reviews.png"
import "./Product.css"

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      type: '',
      description: '',
      image: '',
      price: '',
      rating: '',
      category: '',
      aisle: '',
      _id: ''
    }

  }


  async componentDidMount() {
    const product = await getProduct(this.props.match.params.id)

    this.setState({
      title: product.title,
      type: product.type,
      image: product.image,
      description: product.description,
      price: product.price,
      rating: product.rating,
      _id: product._id
    })

  }


  render() {

    return (
      <Layout>
        <div className="entire-main-section">

          <div className="x-axis-main-section">
            <div className="main-info-div">
              <div className="main-info-thumbnail">
                <img src={this.state.image} />
              </div>
              <div className="stack-icons-info">
                <div className="icons-div">
                  <img src={ShoppingList} className="shopping-icon" />
                  <div className="info-div-sub">
                    <h2>{this.state.title}</h2>
                    <img src={Rating} className="ratings-icon" />
                  </div >
                  <img src={Small_Chat} className="small_chat-icon" />
                </div>
              </div>
            </div>
            <div className="price-button-div-item">
              <span className="price-lower-item">${this.props.price}</span>
              <button className="add-to-cart-item">Add To Cart</button>
            </div>
            <div className="edit-delete-div">
              <Link to={`/products/${this.state._id}/edit`} className="edit-link">Edit</Link>
              <button className="delete-button" onClick={() => deleteProduct(this.state._id)}>Delete</button>
            </div>
            <div className="nutrition-div">
              <div className="nutrition-recipe-banner">
                <img src={nutrition_reviews} />
              </div>
              <div className="info-for-nutrition">
                Some more text around this div
          </div>
            </div>
          </div>


          <div className="y-axis-main-section">
            <div className="suggestions-div">
              <div className="suggestins-div-title">
                <h4>You Might Like</h4>
              </div>
              <div className="listed-suggestions">
                <div className="single-main-info-div">
                  <div className="single-suggested-image-div">
                    Image here
                </div>
                  <div className="single-suggested-info-div">
                    Weight, title here
                </div>
                </div>
                <div className="single-suggested-button-price-div">
                  price
                  <button className="single-suggested-add-button">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </Layout>
    )
  }
}