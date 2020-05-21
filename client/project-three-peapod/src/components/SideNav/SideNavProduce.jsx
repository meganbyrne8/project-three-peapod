import React, { Component } from 'react'
import { getProducts } from '../../services/product'
import SideNavAisleCard from './SideNavAisleCard'

import { Link } from "react-router-dom";
import './SideNavProduce.css'
import Beverages from '../BrowseAislesImages/beverages.jpg'
import Bread from '../BrowseAislesImages/bread.jpg'
import Dairy from '../BrowseAislesImages/dairy.jpg'
import Deli from '../BrowseAislesImages/deli.jpg'
import Kits from '../BrowseAislesImages/meal-kits.jpg'
import Meat from '../BrowseAislesImages/meat.jpg'
import Produce from '../BrowseAislesImages/produce.jpg'
import Seafood from '../BrowseAislesImages/seafood.jpg'

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
                        <ul>
                            <li className="propsName">
                                Products<i className="arrow down"></i>
                            </li>
                        </ul>
                        {/* <p className="propsName">{this.props.state.name} OH YEA</p> */}
                    </div>
                </div>
                {this.state.open && (
                    <ul>
                        <li className="arrivals">New Arrivals</li>
                        <li className="organic">Organic</li>
                        <Link to='/products'>
                            <div className="side-produce">
                                <img src={Produce} alt="" className="produce-class" />
                                <h3>Produce</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="side-meat">
                                <img src={Meat} alt="" className="meat-class" />
                                <h3>Meat</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="side-seafood">
                                <img src={Seafood} alt="" className="seafood-class" />
                                <h3>Seafood</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="side-meal-kits">
                                <img src={Kits} alt="" className="kits-class" />
                                <h3>Meal Kits</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="side-deli">
                                <img src={Deli} alt="" className="deli-class" />
                                <h3>Deli</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="side-dairy">
                                <img src={Dairy} alt="" className="dairy-class" />
                                <h3>Dairy</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="side-beverages">
                                <img src={Beverages} alt="" className="beverages-class" />
                                <h3>Beverages</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="side-bread">
                                <img src={Bread} alt="" className="bread-class" />
                                <h3>Bread & Baking</h3>
                            </div>
                        </Link>
                    </ul>
                    //add a map here  inside the UL
                )}
            </div>


        )
    }
}

export default SideNavProduce