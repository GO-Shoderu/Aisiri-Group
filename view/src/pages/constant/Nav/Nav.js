import "./Nav.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo_icon.png";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top py">
      <div className="container-fluid mx-xl-5">
        <div>
          <a href="./" className="navbar-brand d-flex align-items-center">
            <img src={logo} width={50} height={50} alt="Aisiri Group logo" />
            <span className="ms-2 company-name">AISIRI GROUP</span>
          </a>
        </div>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Expand Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto nav-pills nav-fill">
            <li className="nav-item mx-3">
              <Link
                to="/"
                className={`nav-link company ${
                  activeLink === "/" ? "custom" : ""
                }`}
                onClick={() => handleNavLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/#shop"
                className={`nav-link company ${
                  activeLink === "/shop" ? "custom" : ""
                }`}
                onClick={() => handleNavLinkClick("/shop")}
              >
                Shop Wines
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="#about"
                className={`nav-link company ${
                  activeLink === "/about" ? "custom" : ""
                }`}
                onClick={() => handleNavLinkClick("/about")}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="#contact"
                className={`nav-link company ${
                  activeLink === "/contact" ? "custom" : ""
                }`}
                onClick={() => handleNavLinkClick("/contact")}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/profile"
                className={`nav-link company ${
                  activeLink === "/profile" ? "custom" : ""
                }`}
                onClick={() => handleNavLinkClick("/profile")}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/cart"
                className={`nav-link company ${
                  activeLink === "/cart" ? "custom" : ""
                }`}
                onClick={() => handleNavLinkClick("/cart")}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
