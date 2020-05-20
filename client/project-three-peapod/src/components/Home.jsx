import React from 'react'
import './Home.css'
import Footer from './shared/Footer'
import peapodLogo from "./shared/peapod-Logo.png";
// import { RiRadioButtonLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
import zipbar from "./zipbar.png"
import Buttonhome from "./Buttonhome.png"
import Buttonbus from "./Buttonbus.png"


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
          <div>
          <img src={Buttonhome} alt="" className="buttonhome" />
          </div>

          <div>
          <img src={Buttonbus} alt="" className="buttonbus" />
             </div>
        </div>
      </form>

      <div style={{backgroundImage: `url(${zipbar})`}}className="search-plus-button">

          <Link to="/browse"><button><strong>Browse Now</strong></button></Link>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Home