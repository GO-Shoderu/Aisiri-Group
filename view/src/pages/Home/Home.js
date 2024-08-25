import React from "react";
import Hero from "./Sections/Hero/Hero";
import Wines from "./Sections/Wines/Wines";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";

const Home = () => {
  return (
    <div className="bg-light">
      <Hero />
      <Wines />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
