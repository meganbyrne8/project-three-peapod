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
          <strong>Already have an account?</strong>
          <span className="sign">
            {" "}
            <Link to="/signIn"><strong>Sign In</strong></Link>
          </span>
        </p>
      </div>
    </div>
      <div className="cover">

        <div className="shop">
        <h2>Shop for thousands</h2>
        </div>

        <div className="of">
        <h2>of grocery items for</h2>
        </div>

        <div className="your">
        <h2>your home or</h2>
        </div>

        <div className="bus">
          <h2>business</h2>
        </div>

        <h3>Grocery shop from anywhere.</h3>
        <p><strong>Delivery on your schedule.</strong></p>
      

      <form>  
        <div className="radio">

        <input type="checkbox"/>
        <label class="container">Home
        <span class="circle"></span>
        </label>

        <input type="checkbox"/>
        <label class="container">Business
        <span class="checkmark"></span>
        </label>



          {/* <div>
          <input 
            type="radio" 
            checked={"true"} 
            className="radio-home" 
            /> 
          <label htmlFor="Home">
            Home
            <span className="checkmark"></span>
          </label>
          </div>

          <div>
            <input 
            type="radio" 
            />
            <label htmlFor="Business">
             Business 
             <span className="checkmark"></span>
            </label> 
             </div> */}
        </div>
      </form>

      <div className="search-plus-button">
        <form className="search-home">
            <input
                className="search-input"
                value="Enter Zip"
                name="Search"
                placeholder="Search"
                type="text"
                />
                <Link to="/browse"><button><strong>Browse Now</strong></button></Link>
        </form>
      </div>
      </div>
    <Footer />
  </>
  )
}

export default Home