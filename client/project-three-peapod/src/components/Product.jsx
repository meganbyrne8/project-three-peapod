import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getProduct, deleteProduct } from '../services/product'
import Layout from "./shared/Layout"
import BackMenuButton from "./ProductItemImages/BackMenuButton.png"
import ShoppingList from "./ProductItemImages/ShoppingList.png"
import Rating from "./ProductItemImages/Rating.png"
import Small_Chat from "./ProductItemImages/Small_Chat.png"
import nutrition_reviews from "./ProductItemImages/nutrition_reviews.png"
import nutritionLogo from "./ProductItemImages/nutritionLogo.png"
import AddToCart from "./ProductItemImages/AddToCart.png"
import tomatoesThumbnail from "./ProductItemImages/tomatoesThumbnail.png"
import checkedBox from "./ProductItemImages/checkedBox.png"
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
        <header className="component-nav">
          <div className="close-out-button">
            <img src={BackMenuButton} className="back-button" />
          </div>
          <div className="section-title">
            <h3>Item Detail</h3>
          </div>
        </header>

        <div className="entire-main-section">

          <div className="x-axis-main-section">
            <div className="main-info-div">
              <div className="main-info-thumbnail">
                <img src={this.state.image} />
              </div>

              <div className="stack-icons-info">
                <div className="icons-div">
                  <Link to="/home" className="shopping-icon-div">
                    <img src={ShoppingList} className="shopping-icon" />
                  </Link>
                  <div className="info-div-sub">
                    <h2>{this.state.title}</h2>
                    <div className="info-div-stars">
                      <img src={Rating} className="ratings-icon" />
                      <p>(0 Ratings)</p>
                    </div>
                  </div >
                  <img src={Small_Chat} className="small_chat-icon" />
                </div>
              </div>
            </div>

            <div className="price-button-div-item">
              <div className="price-button-div-item-text">
                <span className="price-lower-item">$ {this.state.price}</span>
                <p>1.75 lb packaging | 0.46 / oz</p>
              </div>
              <img src={AddToCart} />
            </div>

            <div className="nutrition-div">
              <div className="nutrition-recipe-banner">
                <img src={nutrition_reviews} className="reviews-banner-img" />
              </div>
              <div className="nutrition-logo">
                <img src={nutritionLogo} />
              </div>
              <div className="info-for-nutrition">
                <div className="nutrition-split-div">
                  <h3 className="nutrition-title">
                    Nutrition
                  </h3>
                  <div className="nutrition-breakdown-div">
                    <div className="single-nutrition-breakdown-div">
                      <h3>41</h3>
                      <h4>CALORIES</h4>
                    </div>
                    <div className="single-nutrition-breakdown-div">
                      <h3>0.1g</h3>
                      <h4>SAT FAT</h4>
                    </div>
                    <div className="single-nutrition-breakdown-div">
                      <h3>11mg</h3>
                      <h4>SODIUM</h4>
                    </div>
                    <div className="single-nutrition-breakdown-div">
                      <h3>6g</h3>
                      <h4>SUGARS</h4>
                    </div>
                  </div>
                </div>
                <div className="substitute-item-div">
                  <h3 className="substitute-item-title">Substitute Item</h3>
                  <div className="substitute-image">
                    <img src={tomatoesThumbnail} className="beefsteak-tomatoes-thumbnail" />
                    <div className="beefsteak-tomatoes-substitute-text">
                      <h6>Tomatoes Beefsteak</h6>
                      <p>2 ct pkg</p>
                    </div>
                  </div>
                  <div className="substitute-checkbox">
                    <img src={checkedBox} className="substitute-checkbox-image" />
                    <p>If unavailable, substitute with this item</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="edit-delete-div">
              <Link to={`/products/${this.state._id}/edit`} className="edit-link">Edit</Link>
              <button className="delete-button" onClick={() => deleteProduct(this.state._id)}>Delete</button>
            </div>
          </div>


          <div className="y-axis-main-section">
            <div className="suggestions-div">
              <div className="suggestins-div-title">
                <h3>You Might Like</h3>
              </div>

              <div className="listed-suggestions">
                <div className="single-main-info-div">
                  <div className="single-suggested-image-div">
                    <img src={tomatoesThumbnail} className="beefsteak-tomatoes-thumbnail" />
                  </div>
                  <div className="single-suggested-info-div">
                    <p>1.75 lb pkg | $0.46 / oz</p>
                    <h5>Tomatoes Beefsteak Value Pack</h5>
                  </div>
                </div>
                <div className="single-suggested-button-price-div">
                  <p>$ 8.99</p>
                  <img src={AddToCart} className="singular-add-to-cart" />
                </div>
              </div>

              <div className="listed-suggestions">
                <div className="single-main-info-div">
                  <div className="single-suggested-image-div">
                    <img src={tomatoesThumbnail} className="beefsteak-tomatoes-thumbnail" />
                  </div>
                  <div className="single-suggested-info-div">
                    <p>1.75 lb pkg | $0.46 / oz</p>
                    <h5>Tomatoes Beefsteak Value Pack</h5>
                  </div>
                </div>
                <div className="single-suggested-button-price-div">
                  <p>$ 8.99</p>
                  <img src={AddToCart} className="singular-add-to-cart" />
                </div>
              </div>

              <div className="listed-suggestions">
                <div className="single-main-info-div">
                  <div className="single-suggested-image-div">
                    <img src={tomatoesThumbnail} className="beefsteak-tomatoes-thumbnail" />
                  </div>
                  <div className="single-suggested-info-div">
                    <p>1.75 lb pkg | $0.46 / oz</p>
                    <h5>Tomatoes Beefsteak Value Pack</h5>
                  </div>
                </div>
                <div className="single-suggested-button-price-div">
                  <p>$ 8.99</p>
                  <img src={AddToCart} className="singular-add-to-cart" />
                </div>
              </div>


            </div>
          </div>


        </div>
      </Layout>
    )
  }
}