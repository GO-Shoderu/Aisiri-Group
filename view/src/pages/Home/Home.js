import React from "react";
import Hero from "./Sections/Hero/Hero";
import Wines from "./Sections/Wines/Wines";

const Home = () => {
  return (
    <div className="bg-light">
      <Hero />
      <Wines />
    </div>
  );
};

export default Home;
