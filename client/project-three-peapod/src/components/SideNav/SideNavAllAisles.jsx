import React, { Component } from 'react'
import { getProducts } from '../../services/product'
import SideNavAisleCard from './SideNavAisleCard'
import './SideNavAllAisles.css'

class SideNavAllAisles extends Component {
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
            <SideNavAisleCard _id={aisle._id} title={aisle.aisle} key={index} />
        ))

        return (
            <div className="dd-dropdown">
                <div
                    tabIndex={0}
                    className="dd-headers"
                    role="button"
                    onClick={() => this.toggle(!this.state.open)}
                >
                    <div className="dd_header_name">
                        <ul>
                            <li className="propsName">
                                All Aisles<i className="arrow down"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                {this.state.open && (
                    <ul>{populateAisles}</ul>
                    //add a map here  inside the UL
                )}
            </div>


        )
    }
}

export default SideNavAllAisles