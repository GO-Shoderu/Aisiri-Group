import "./Nav.css";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
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
                to="#hero"
                className={`nav-link company ${
                  activeLink === "#hero" ? "custom" : ""
                }`}
                onClick={() => handleNavLinkClick("#hero")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="#shop"
                smooth
                className={`nav-link company ${
                  activeLink === "#shop" ? "custom" : ""
                }`}
                onClick={() => handleNavLinkClick("#shop")}
              >
                Shop Wines
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="#about"
                smooth
                className={`nav-link company ${
                  activeLink === "#about" ? "custom" : ""
                }`}
                onClick={() => handleNavLinkClick("#about")}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="#contact"
                smooth
                className={`nav-link company ${
                  activeLink === "#contact" ? "custom" : ""
                }`}
                onClick={() => handleNavLinkClick("#contact")}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item mx-4">
              <a
                href="https://shop.aisirigroup.co.za/?page_id=9"
                className="nav-link company"
                target="_self"
                rel="noopener noreferrer"
              >
                Refund Policy
              </a>
            </li>

            <li className="nav-item mx-4">
              <a
                href="https://shop.aisirigroup.co.za/"
                className="nav-link"
                target="_self"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="mt cart-nClicked"
                  width="17px"
                  height="17px"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
