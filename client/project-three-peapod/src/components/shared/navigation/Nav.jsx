import React, { Component } from "react";
import logo from "./stop-and-shop-logo.jpg";
import { FiUser } from "react-icons/fi";
import Cart from "./Cart";
import "./Nav.css";
import Dropdown from "./DropdownShop";
import DropdownBrowse from "./DropdownBrowse";
import { getProducts } from "../../../services/product";
import Suggestions from "./Suggestions";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selection: [],
      aisles: [],
    };
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  async componentDidMount() {
    await this.getData();
  }

  getData = async () => {
    const aisles = await getProducts();
    this.setState({
      aisles: aisles,
    });
  };

  render() {
    console.log("Are..", this.props);
    // if(this.props.name) {

    // }

    return (
      <div className="nav">
        <div>
          <img src={logo} alt="stop-shop-logo" className="logo" />
        </div>
        <div className="drop-down">
          <h3>
            <DropdownBrowse
              aisles={this.state.aisles.map((aisle, index) => (
                <div>
                  <li id={aisle._id} key={index}>
                    {aisle.aisle}
                  </li>
                </div>
              ))}
            />
          </h3>
          <h3 className="shop">
            <Dropdown />
            {/* <i className="arrow down"></i> */}
          </h3>
        </div>
        <div className="search">
          <form>
            <Suggestions />
          </form>
        </div>
        <div className="sign-out">
          <p>
            All set? 
            <Link to="/signOut"> Sign Out </Link>
          </p>
        </div>
        <div className="guest-container">
          <span className="person">
            <FiUser />
            <p className="guest">Guest</p>
          </span>
          <Cart />
        </div>
      </div>
    );
  }
}

export default Nav;
