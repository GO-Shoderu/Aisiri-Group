import "./Nav.css";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from "../../../assets/logo/horizontal_logo_transparent.png";
import logo from "../../../assets/logo/logo_icon.png";
// import "../../../assets/bootstrap-5.3.3-dist/js/bootstrap.bundle.min.js";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <nav className="navbar navbar-expand-lg py sticky-top bg-light">
      <div className="container-fluid mx-xl-5">
        <div>
          <a href="./" className="navbar-brand d-flex align-items-center">
            <img src={logo} width={50} height={50} alt="okumbe logo" />
            <span className="ms-2 company">AISIRI GROUP</span>
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
          <ul className="navbar-nav ms-auto nav-pills nav-fill ">
            <li className="nav-item mx-3">
              <Link
                to="/"
                className={
                  activeLink === "/"
                    ? "nav-link active text-primary bg-light"
                    : "nav-link"
                }
                onClick={() => handleNavLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/about"
                className={
                  activeLink === "/about"
                    ? "nav-link active text-primary bg-light"
                    : "nav-link"
                }
                onClick={() => handleNavLinkClick("/about")}
              >
                Shop Wines
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/service"
                className={
                  activeLink === "/services"
                    ? "nav-link active text-primary bg-light"
                    : "nav-link"
                }
                onClick={() => handleNavLinkClick("/services")}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/projects"
                className={
                  activeLink === "/projects"
                    ? "nav-link active text-primary bg-light"
                    : "nav-link"
                }
                onClick={() => handleNavLinkClick("/projects")}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/teams"
                className={
                  activeLink === "/teams"
                    ? "nav-link active text-primary bg-light"
                    : "nav-link"
                }
                onClick={() => handleNavLinkClick("/teams")}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link
                to="/contact"
                className={
                  activeLink === "/contact"
                    ? "nav-link active text-primary bg-light"
                    : "nav-link"
                }
                onClick={() => handleNavLinkClick("/contact")}
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
