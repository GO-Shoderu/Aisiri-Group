import React from "react";

import "./About.css";
import aboutImage from "../../../../assets/images/hermes-rivera-aK6WGqxyHFw-unsplash.jpg";

const About = () => {
  return (
    <div className="container-fluid py-3 mt-5 about">
      <div className="container">
        <h1 className="text-center wines pt-5">ABOUT US</h1>
        <div className="row align-items-center mt-5 mb-5">
          <div
            className="col"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            id="aboutDiv"
          >
            <div className="card  rm-bg">
              <div className="card-body text-center text-xl-start">
                <p className="card-text">
                  At Asiri Group, we're more than just a winery – we're
                  storytellers, adventurers, and lovers of fine wine. Our
                  journey began with a shared passion for crafting exceptional
                  wines that reflect the unique terroir of our vineyards. With a
                  focus on quality and innovation, each bottle we produce tells
                  a tale of dedication, exploration, and the pursuit of
                  excellence.
                </p>
              </div>
            </div>
          </div>{" "}
          {/* Add align-items-center here */}
          <div
            className="col d-none d-xl-flex justify-content-center px-5"
            data-aos="zoom-in-up"
            data-aos-duration="500"
          >
            <img src={aboutImage} width={500} alt="About" className="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
