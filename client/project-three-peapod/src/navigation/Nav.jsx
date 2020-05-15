import React from "react";
import logo from "./stop-and-shop-logo.jpg";
import { FiUser } from "react-icons/fi";
import Cart from "./Cart"
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div>
        <img src={logo} alt="stop-shop-logo" className="logo" />
      </div>
      <div className="drop-down">
        <h3>
          Browse Aisles <i className="arrow down"></i>
        </h3>
        <h3 className="shop">
          Shop <i className="arrow down"></i>
        </h3>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" className="input" />
  
      </div>
      <div className="guest-container">
        <span className="person"><FiUser /></span>
        <p className="guest">Guest</p>
      </div>

      <Cart/>
    </div>
  );
}

export default Nav;
