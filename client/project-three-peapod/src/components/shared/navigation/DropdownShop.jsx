import React, { Component } from "react";

class Dropdown extends Component {
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
              My Shop<i className="arrow down"></i>
            </p>
          </div>
        </div>
        {this.state.open && (
          <div className="dropdown">
            <ul>
              <li>Specials</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
