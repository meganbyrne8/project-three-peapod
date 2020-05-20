import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        this.setState({
            url: '/product/' + this.props._id
        })
    }

    render() {
        return (
            <div>
                <img src={this.props.image} alt="" />
                <Link to={this.state.url}>
                    <h1>{this.props.aisle}</h1>
                </Link>
            </div>
        )
    }
}

export default Product
