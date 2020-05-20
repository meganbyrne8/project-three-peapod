import React from "react";
import { Link } from "react-router-dom";
import "./SecondaryNav.css";

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
          <li>Pest Purchases</li>
        </Link>
        <Link>
          <li> Order Genius</li>
        </Link>
        <Link>
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
        <Link>
          <li>Delivery</li>
        </Link>
        <span className="spans">to</span>
        <Link>
          <li>10035</li>
        </Link>
        <span className="spans">|</span>
        <Link>
          <li>Select a Time</li>
        </Link>
      </div>
    </div>
  );
}
