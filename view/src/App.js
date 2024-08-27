import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import Nav from "./pages/constant/Nav/Nav";
import Home from "./pages/Home/Home";

// import "App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark pb-3">
        <Nav />
        <Home />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<AboutUS />} />
          <Route path="/service" element={<Services />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/okumbe" element={<Okumbe />} />
          <Route path="/matheatsie" element={<Matheatsie />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/ecard" element={<ECard />} /> */}
        </Routes>
        {/* <Scroll /> */}
        {/* <Banner /> */}
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
