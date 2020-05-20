import React, { Component } from "react";
import "./DropdownBrowse.css";
import { getProducts } from "../../../services/product";

class DropdownBrowse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selection: [],
    };
    // console.log("user", props.user);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div className="browse-dropdown">
        <div
          tabIndex={0}
          className="dropdown-headers"
          role="button"
          onClick={() => this.toggle(!this.state.open)}
        >
          <div className="">
            <p className="cat-name">
              Browse Aisle<i className="arrow down"></i>
            </p>
          </div>
        </div>
        {this.state.open && (
          <div className="dropdown">
            <ul>
              <li>New Arrivals</li>
              <li>Organic</li>
              <li>{this.props.aisles}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default DropdownBrowse;
