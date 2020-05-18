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
        <p>Delivery on your schedule.</p>
      

      <form>
        <div className="radio">
          <label>
            <input 
            type="radio" 
            value="Home" 
            name="Home" 
            checked={"true"} 
            className="radio-home" 
            /> 
            Home
          </label>
            <label>
            <input 
            type="radio" 
            value="Business" 
            name="Business" 
            checked={""}
            className="radio-business"
            />
            Business 
          </label>
        </div>
      </form>
      <form className="search-home">
            <input
                className="search-input"
                value="Enter Zip"
                name="Search"
                placeholder="Search"
                type="text"
                />
                <button><strong>Browse Now</strong></button>
        </form>
        </div>
    <Footer />
  </>
  )
}

export default Home