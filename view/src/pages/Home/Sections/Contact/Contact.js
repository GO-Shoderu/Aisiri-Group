import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
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
          <li>Contacting us</li>
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

const Contact = () => {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  // const getRandomValue = () => (Math.random() < 0.5 ? 1000 : 1500);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          toast.success("Email sent to Okumbe Consulting Quantity Surveyors!");
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const doNothing = event => event.preventDefault();

  return (
    <div
      className="container py-3 mt-4 bg-light justify-content-center"
      id="contact"
    >
      <Toaster position="top-center" reverseOrder={true} />

      <div className="row mt-5">
        <div className="col-12">
          <div
            className="text-center mt-3"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="250"
          >
            <h1>
              <span className="wines">CONTACT US</span>
            </h1>
            <p className="lead">Questions to ask? Send us an email...</p>
          </div>
          <div className="row justify-content-center">
            <div className="col mb-5">
              {/* <form ref={form} onSubmit={sendEmail}> */}
              <form onSubmit={doNothing}>
                {/* <label for="email" className="form-label">
                  Email address:
                </label> */}
                <div
                  className="input-group mb-4"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="250"
                >
                  <span className="input-group-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="socials-contactUs"
                      width="20PX"
                      height="20PX"
                    >
                      {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="email"
                    name="user_email"
                    className="form-control"
                    placeholder="e.g. mario@example.com"
                  />
                </div>
                {/* <label for="name" className="form-label">
                  Name:
                </label> */}
                <div
                  className="mb-0 input-group"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="250"
                >
                  <span className="input-group-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="socials-contactUs"
                      width="20PX"
                      height="20PX"
                    >
                      {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="form-control"
                    placeholder="e.g. Mario"
                  />
                </div>
                <div
                  className="mb-4 mt-3 form-floating"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="250"
                >
                  <textarea
                    className="form-control"
                    id="query"
                    name="user_message"
                    style={{ height: "140px" }}
                    placeholder="query"
                  ></textarea>
                  <label htmlFor="query">Your message...</label>
                </div>
                <div
                  className="mb-4 text-center"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="250"
                >
                  {/* <button
                    type="submit"
                    className="text-center text-xl-start call-to-action company-color"
                    onClick={() => setModalShow(true)}
                  >
                    Submit
                  </button> */}
                  <button
                    className="text-center text-xl-start call-to-action company-color"
                    onClick={() => setModalShow(true)}
                  >
                    Submit
                  </button>
                </div>
              </form>
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

export default Contact;
