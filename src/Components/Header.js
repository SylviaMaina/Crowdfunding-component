import React from "react";
import "./Header.css";
import Hero from "../images/image-hero-desktop.jpg";

function Header() {
  return (
    <div className="navigation">
      <div className="header">
        <img src={Hero} alt="..." />
      </div>

      <div className="nav">
        <h2>CrowdFund</h2>

        <ul>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
