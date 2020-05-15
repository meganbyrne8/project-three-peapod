import React, { Component } from 'react'
//import './ProductCreate.css'
// import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import { createProduct } from '../services/product'

class ProductCreate extends Component {
    constructor() {
        super()
        this.state = {
            product: {
                title: '',
                type: '',
                description: '',
                image: '',
                price: '',
                rating: '',
                category: '',
                aisle: ''

            },
            created: false
        }
        console.log("FRIDAY",this.state.product.title)
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            product: {
                ...this.state.product,
                [name]: value
            }

        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createProduct(this.state.product)
        console.log("DRINKS", created)
        this.setState({ created })
    }

    render() {
        const { product, created } = this.state

        if (created) {
            return <Redirect to={`/products`} />
        }
        return (
            // <Layout user={this.props.user}>
                <form className="create-form">

                    <input
                        className="input-name"
                        placeholder='Name'
                        value={product.title}
                        name='title'
                        required
                        autoFocus
                        onChange={this.handleChange}
                    />
                    <input
                        className="input-price"
                        placeholder='Price'
                        value={product.price}
                        name='price'
                        required
                        onChange={this.handleChange}
                    />
                    <textarea
                        className="textarea-description"
                        rows={10}
                        placeholder='Description'
                        value={product.description}
                        name='description'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className="input-image-link"
                        placeholder='Image Link'
                        value={product.image}
                        name='image'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className="input-image-link"
                        placeholder='Type'
                        value={product.type}
                        name='type'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className="input-image-link"
                        placeholder='Rating'
                        value={product.rating}
                        name='rating'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className="input-image-link"
                        placeholder='Category'
                        value={product.category}
                        name='category'
                        required
                        onChange={this.handleChange}
                    />
                    <input
                        className="input-image-link"
                        placeholder='Aisle'
                        value={product.aisle}
                        name='aisle'
                        required
                        onChange={this.handleChange}
                    />

                    <button type='submit' className="submit-button" onClick={this.handleSubmit}>Submit</button>
                </form>
            // </Layout>
        )
    }
}

export default ProductCreate