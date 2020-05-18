import React from 'react'
import './Home.css'
// import Layout from './shared/Layout'
import Footer from './shared/Footer'
import cover from './shared/peapod-cover-photo.png'
import peapod from './shared/peapod-Logo.png'

const Home = () => {
  return (
 <>
<nav className="home-nav">
      <div className="peapod-Logo">
        <img src={peapod} alt="peapod-Logo" />
      </div>
      <div className="account-sign-in">
        <h4 className="account">Already have an account?</h4>
        <h5 className="signIn">Sign In</h5>
      </div>
</nav>


      <div className="cover">
        <h3>Shop for thousands of grocery items for your home or business</h3>
      </div>
      <Footer />
  </>
  )
}

export default Home