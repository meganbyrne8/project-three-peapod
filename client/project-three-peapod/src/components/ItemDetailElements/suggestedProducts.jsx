import React, { Component } from 'react'
import AddToCart from "../ProductItemImages/AddToCart.png"
import tomatoesThumbnail from "../ProductItemImages/tomatoesThumbnail.png"

export default class suggestedProducts extends Component {
  render() {
    return (
      <div>
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
    )
  }
}

