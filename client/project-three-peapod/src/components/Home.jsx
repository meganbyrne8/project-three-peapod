import React from 'react'
import './Home.css'
import Footer from './shared/Footer'
import peapodLogo from "./shared/peapod-Logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
 <>
      <div className="center-nav">
      <img src={peapodLogo} alt="" className="peapod" />
      <div className="account">
        <p>
          Already have an account?
          <span className="sign-in">
            {" "}
            <Link>Sign In</Link>
          </span>
        </p>
      </div>
    </div>
      <div className="cover">
        <h2>Shop for thousands of grocery items for your home or business</h2>
        <h3>Grocery shop from anywhere.</h3>
        <p>Delivery on your schedule</p>
      </div>
    <Footer />
  </>
  )
}

export default Home