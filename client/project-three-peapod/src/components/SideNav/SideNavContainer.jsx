import React, { Component } from 'react'
import { getProducts } from '../../services/product'
import SideNavAisleCard from './SideNavAisleCard'
import SideNavProduce from './SideNavProduce'
import SideNavAllAisles from './SideNavAllAisles'

class SideNavContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            selection: [],
            aisles: []
        }
    }

    toggle() {
        this.setState({
            open: !this.state.open,
        });
    }

    async componentDidMount() {
        const aisles = await getProducts()
        this.setState({ aisles })
    }

    render() {
        const populateAisles = this.state.aisles.map((aisle, index) => (
            <SideNavAisleCard _id={aisle._id} title={aisle.title} key={index} />
        ))

        return (
            <div>
                <SideNavAllAisles />
                <SideNavProduce />
            </div>
        )
    }
}

export default SideNavContainer