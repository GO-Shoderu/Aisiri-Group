// Hero.js
import React from "react";
import "./Hero.css"; // Import the CSS file for styling

import logo_icon from "../../../../assets/logo/logo_icon.png";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img
          src={logo_icon}
          alt="Aisiri Group Logo"
          className="center-image pt-4 pb-0 mb-0"
        />
        <p className="hero-text pt-0 mt-0">AISIRI GROUP</p>
      </div>
    </div>
  );
};

export default Hero;
