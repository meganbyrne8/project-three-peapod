import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SideNavAisleCard.css'

class SideNavAisleCard extends Component {
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
            <div className='aisle-card'>
                <Link to={this.state.url} className='p-title'>
                    <p >{this.props.title}</p>
                </Link>
            </div>
        )
    }
}

export default SideNavAisleCard
