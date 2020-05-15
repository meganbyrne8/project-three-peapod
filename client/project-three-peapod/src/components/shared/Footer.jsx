import React from 'react'
import './Footer.css'
import { FaPinterestP, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () =>
    <footer>
        <ul className="left">
            <li>Browse Aisles</li>
            <li>Specials</li>
            <li>Order Genius</li>
            <li>Express Shop</li>
            <li>Past Purchases</li>
            <li>Shopping List</li>
            <li>Get PodPass</li>
        </ul>

        <ul className="middle">
            <li><strong>About</strong></li>
            <li>Accessibility Policy</li>
            <li>Security</li>  
            <li><strong>Company</strong></li>
            <li>Peapod Digital Labs Careers</li>
        </ul>
            
        <ul className="right">
            <li><strong>Customer Support</strong></li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Notifications</li>
            <li>Refer-a-Friend</li>
            <li>Give Us Feedback</li>
            <li>Product Recalls</li>
            <li>COVID-19</li>
        </ul>
        <div className="icons">
            <FaPinterestP />
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
         
        </div>

        <div className="legal">
        <p>Legal Terms</p>
        </div>
        
        <div classname="privacy"> 
        <p>Privacy Statement</p>
        </div>

        <div className="rights">
        <p>1990-2020 Peapod, LLC. All Rights Reserved</p>
        </div>


    </footer>

export default Footer