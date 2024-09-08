import React, { useState, useEffect } from "react";
import "./Scroll.css";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top  rounded scroll ${
        isVisible ? "show" : "hide"
      }`}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default Scroll;
