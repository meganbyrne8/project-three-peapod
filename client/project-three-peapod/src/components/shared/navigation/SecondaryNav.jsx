import React from "react";
import { Link } from "react-router-dom";
import "./SecondaryNav.css";
import { FiTruck } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function SecondaryNav() {
  return (
    <div className="secondary-nav-container">
      <ul className="secondary-ul">
        <Link>
          <li>Specials</li>
        </Link>
        <Link>
          <li>Loaded Coupons</li>
        </Link>
        <Link>
          <li>Past Purchases</li>
        </Link>
        <Link>
          <li> Order Genius</li>
        </Link>
        <Link to="/home">
          <li>Shopping List</li>
        </Link>
        <Link>
          <li>COVID-19</li>
        </Link>
        <Link>
          <li>Help</li>
        </Link>
      </ul>
      <div className="inbeded">
        <div className="delivery">
          <span className="truck">
            <FiTruck />
          </span>
          <Link>
            <li>Delivery</li>
          </Link>
          <span className="spans">to</span>
          <Link>
            <li>10035</li>
          </Link>
        </div>
        <div className="time">
          <span className="clock">
            <AiOutlineClockCircle />
          </span>
          <span className="span2">|</span>
          <Link>
            <li>Select a Time</li>
          </Link>
        </div>
      </div>
    </div>
  );
}
