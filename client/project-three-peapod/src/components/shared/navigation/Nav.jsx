import React from "react";
import logo from "./stop-and-shop-logo.jpg";
import { FiUser } from "react-icons/fi";
import Cart from "./Cart";
import "./Nav.css";
import Dropdown from "./DropdownShop";
import DropdownBrowse from "./DropdownBrowse";

function Nav(props) {
  return (
    <div className="nav">
      <div>
        <img src={logo} alt="stop-shop-logo" className="logo" />
      </div>
      <div className="drop-down">
        <h3>
          <DropdownBrowse user={props.user}/>
          {/* <i className="arrow down"></i> */}
        </h3>
        <h3 className="shop">
          <Dropdown />
          {/* <i className="arrow down"></i> */}
        </h3>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" className="input" />
      </div>
      <div className="guest-container">
        <span className="person">
          <FiUser />
        </span>
        <p className="guest">Guest</p>
      </div>

      <Cart />
    </div>
  );
}

export default Nav;
