import React from "react";

import "./Wines.css";
import wineImage from "../../../../assets/images/pngegg (1).png";

const Wines = () => {
  return (
    <div className="container py-3 mt-5">
      <h1 className="text-center wines">OUR WINES</h1>
      <div className="row align-items-center mt-5">
        {" "}
        {/* Add align-items-center here */}
        <div
          className="col d-none d-xl-flex justify-content-center px-5"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <img src={wineImage} alt="About" className="rounded" />
        </div>
        <div
          className="col"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          id="aboutDiv"
        >
          <div className="card bg-light">
            <div className="card-body text-center text-xl-start">
              <h5 className="card-title wines">Grape Adventures Ahead!</h5>
              <br />
              <p className="card-text">
                Explore the world of wine with Aisiri Group. Each bottle holds a
                new adventure, waiting for you to uncork and savor. Join us on
                this journey of discovery.
              </p>
              <br />
              <div
                className="text-center text-xl-start call-to-action company-color"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                {/* <Link to="/about" className="btn btn-primary "> */}
                VIEW PRODUCTS
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wines;
