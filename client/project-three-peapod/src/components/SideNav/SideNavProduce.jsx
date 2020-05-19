import React, { Component } from 'react'
import { getProducts } from '../../services/product'
import SideNavAisleCard from './SideNavAisleCard'
import './SideNavProduce.css'

class SideNavProduce extends Component {
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
            <div className="dd-dropdown">
                <div
                    tabIndex={0}
                    className="dd-headers"
                    role="button"
                    onClick={() => this.toggle(!this.state.open)}
                >
                    <div className="dd_header_name">
                        <p className="propsName">
                            Products<i className="arrow down"></i>
                        </p>
                        {/* <p className="propsName">{this.props.state.name} OH YEA</p> */}
                    </div>
                </div>
                {this.state.open && (
                    <ul>
                        <li className='arrivals'>New Arrivals</li>
                        <li className='organic'>Organic</li>
                        <li classnamne='produce-list'>{populateAisles}</li>
                    </ul>
                    //add a map here  inside the UL
                )}
            </div>


        )
    }
}

export default SideNavProduce