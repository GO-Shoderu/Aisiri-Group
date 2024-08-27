import React from "react";

import "./Wines.css";
import wineImage from "../../../../assets/images/pngegg (1).png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import logo from "../../../../assets/logo/logo_icon.png";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div>
            <a href="./" className="navbar-brand d-flex align-items-center">
              <img src={logo} width={50} height={50} alt="Aisiri Group logo" />
              <span className="ms-2 company-name">Feature Coming Soon</span>
            </a>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          We appreciate your patience as we work on enhancing your experience.
        </p>
        <p>This feature will be available in our next update, including:</p>
        <ul>
          <li>Placing orders</li>
          <li>Viewing prices</li>
          <li>Creating accounts</li>
          <li>...and much more!</li>
        </ul>
        <p>
          In the meantime, you can leave us your email in the Contact Us
          section, and we'll keep you informed.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div
          onClick={props.onHide}
          className="text-center text-xl-start call-to-action company-color"
        >
          Close
        </div>
      </Modal.Footer>
    </Modal>
  );
}

const Wines = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="container py-3 mt-5" id="shop">
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
                data-toggle="modal"
                data-target="##exampleModalCenter"
                onClick={() => setModalShow(true)}
              >
                {/* <Link to="/about" className="btn btn-primary "> */}
                VIEW PRODUCTS
                {/* </Link> */}
              </div>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wines;
