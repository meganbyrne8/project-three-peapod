import React, { Component } from "react";

class DropdownBrowse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selection: [],
    };
    console.log("user",props.user);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }


  

  render() {
    return (
      <div className="dd-dropdown">
        <div
          tabIndex={0}
          className="dd-headers"
          role="button"
          onClick={() => this.toggle(!this.state.open)}
        >
          <div className="dd_header_name">
            <p className="propsName">
              Browse Aisle<i className="arrow down"></i>
            </p>
            
          </div>
        </div>
        {this.state.open && (
          <ul>{this.props.user}</ul>
          //add a map here  inside the UL
        )}
      </div>
    );
  }
}

export default DropdownBrowse;
