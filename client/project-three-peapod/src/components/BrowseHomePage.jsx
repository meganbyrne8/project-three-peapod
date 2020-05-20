import React, { Component } from "react";
import { getProducts } from "../services/product";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import "./ProductsContainer.css";
import Layout from "./shared/Layout";
import SideNavContainer from "./SideNav/SideNavContainer";
import BackMenuButton from "./ProductItemImages/BackMenuButton.png"
import Beverages from './BrowseAislesImages/beverages.jpg'
import Bread from './BrowseAislesImages/bread.jpg'
import Dairy from './BrowseAislesImages/dairy.jpg'
import Deli from './BrowseAislesImages/deli.jpg'
import Kits from './BrowseAislesImages/meal-kits.jpg'
import Meat from './BrowseAislesImages/meat.jpg'
import Produce from './BrowseAislesImages/produce.jpg'
import Seafood from './BrowseAislesImages/seafood.jpg'
import './BrowseHomePage.css'



export default class BrowseHomePage extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }

    async componentDidMount() {
        const products = await getProducts();
        this.setState({ products });
    }

    render() {


        return (
            <Layout>
                <header className="component-nav">
                    <div className="close-out-button">
                        <img src={BackMenuButton} className="back-button" />
                    </div>
                    <div className="section-title">
                        <h3>Browse Aisles</h3>
                    </div>
                </header>
                <div className="entire-middle-section">
                    <div className="side-nav-section">




                        <SideNavContainer />
                    </div>
                    <div className="aisles-container">
                        <Link to='/products'>
                            <div className="produce">
                                <img src={Produce} alt="" />
                                <h3>Produce</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="meat">
                                <img src={Meat} alt="" />
                                <h3>Meat</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="seafood">
                                <img src={Seafood} alt="" />
                                <h3>Seafood</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="meal-kits">
                                <img src={Kits} alt="" />
                                <h3>Meal Kits</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="deli">
                                <img src={Deli} alt="" />
                                <h3>Deli</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="dairy">
                                <img src={Dairy} alt="" />
                                <h3>Dairy</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="beverages">
                                <img src={Beverages} alt="" />
                                <h3>Beverages</h3>
                            </div>
                        </Link>
                        <Link>
                            <div className="bread">
                                <img src={Bread} alt="" />
                                <h3>Bread & Baking</h3>
                            </div>
                        </Link>


                    </div>
                </div>




            </Layout>
        );
    }
}
