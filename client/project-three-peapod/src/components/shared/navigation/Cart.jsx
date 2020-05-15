import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Cart.css"

function Cart() {
  return (
    <div className="shopping-cart">
      <p className="price">$0.00</p>
     <span className="icon"><AiOutlineShoppingCart/></span> 
    </div>
  );
}

export default Cart;
