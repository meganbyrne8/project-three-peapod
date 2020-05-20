import React from 'react'
import './Footer.css'
import { FaPinterestP, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () =>
<>
  < hr />
<div className="main-footer">
  <div className="left-column">
    <ul className="left">
      <li><strong>Browse Aisles</strong></li>
      <br/>
      <li><strong>Specials</strong></li>
      <br/>
      <li><strong>Order Genius</strong></li>
      <br/>
      <li><strong>Express Shop</strong></li>
      <br/>
      <li><strong>Past Purchases</strong></li>
      <br/>
      <li><strong>Shopping List</strong></li>
      <br/>
      <li><strong>Get PodPass</strong></li>
      <br/>
      <li><strong>Delivery / Pick Up Times</strong></li>
    </ul>
  </div>

<div className="middle-column">
    <ul className="middle">
      <li><strong>About</strong></li>
      <br/>
      <li>Accessibility Policy</li>
      <br/>
      <li>Security</li>
      <br/>
      <br/>
      <li><strong>Company</strong></li>
      <br/>
      <li>Peapod Digital Labs Careers</li>
    </ul>
</div>

<div className="right column">
    <ul className="right">
      <li><strong>Customer Support</strong></li>
      <br/>
      <li>Contact Us</li>
      <br/>
      <li>Help</li>
      <br/>
      <li>Notifications</li>
      <br/>
      <li>Refer-a-Friend</li>
      <br/>
      <li>Give Us Feedback</li>
      <br/>
      <li>Product Recalls</li>
      <br/>
      <li>COVID-19</li>
    </ul>
</div>
</div>
<br />
    <div className="social-icons">
            <FaPinterestP
            size="20px" />
            <FaFacebookF 
            size="20px" />
            <FaInstagram 
            size="25px" />
            <FaTwitter 
            size="25px" />
            <FaYoutube 
            size="25px" />
    </div>

    <div className="legal">
      <ul className="legal-list">
        <li className="legal-term">Legal Terms</li>
        <li>Privacy Statement</li>
      </ul>
    </div>
    
    <div className="copyright">
      <p>&copy;1990-2020 Peapod, LLC. All Rights Reserved</p>
    </div>
<br/>
</>

export default Footer