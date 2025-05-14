// import React from "react";
// import { BrowserRouter } from "react-router-dom";

// import Nav from "./pages/constant/Nav/Nav";
// import Home from "./pages/Home/Home";

// // import "App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="bg-dark pb-3">
//         <Nav />
//         <Home />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Nav from "./pages/constant/Nav/Nav";
import Home from "./pages/Home/Home";
import AgeGate from "./pages/Home/AgeGate/AgeGate";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dark pb-3">
        <AgeGate />
        <Nav />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
