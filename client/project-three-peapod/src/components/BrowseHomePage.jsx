import React, { Component } from 'react'
import Layout from './shared/Layout'
import SideNavContainer from './SideNav/SideNavContainer'
import BrowseAisles from './BrowseAisles'

class BrowseHomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            aisles: [],
        }
    }

    render() {
        return (
            // <Layout>
            <>
                <SideNavContainer />



                <BrowseAisles />
            </>
            // </Layout>
        )
    }
}

export default BrowseHomePage