import React, { Component } from "react";
import { getProducts } from "../services/product";
import AisleCard from "./AisleCard";
import Layout from "./shared/Layout";

class BrowseAisles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aisles: [],
    };
  }

  async componentDidMount() {
    const aisles = await getProducts();
    this.setState({ aisles });
  }

  render() {
    const populateAisles = this.state.aisles.map((product, index) => (
      <AisleCard
        _id={product._id}
        // title={product.title}
        aisle={product.aisle}
        image={product.image}
        key={index}
      />
    ));
    return (
      <Layout>
        <div>{populateAisles}</div>
      </Layout>
    );
  }
}

export default BrowseAisles;
