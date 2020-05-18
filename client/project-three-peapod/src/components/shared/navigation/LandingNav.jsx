import React from "react";
import peapod from "./peapod.png";
import "./LandingNav.css";
import { Link } from "react-router-dom";

function LandingNav() {
  return (
    <div className="center-nav">
      <img src={peapod} alt="" className="peapod" />
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
  );
}

export default LandingNav;
