import React, { Component } from 'react'
import { getProducts } from '../../services/product'
import AisleCard from './AisleCard'

class BrowseAisles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            aisles: []
        }
    }


    async componentDidMount() {
        const aisles = await getProducts()
        this.setState({ aisles })
    }

    render() {

        const populateAisles = this.state.products.map((product, index) => (
            <AisleCard _id={product._id} title={product.title} image={product.image} key={index} />
        ))
        return (
            <div>
                {populateAisles}
            </div>
        )
    }
}

export default BrowseAisles