import React, { Component } from 'react'
import Layout from './shared/Layout'
import SideNavContainer from './SideNav/SideNavContainer'

class BrowseHomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Layout>
                <SideNavContainer />
                <h1>
                    Hello World
                </h1>
            </Layout>
        )
    }
}

export default BrowseHomePage