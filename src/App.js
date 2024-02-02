import React from "react";
import ScrollToTop from "./scrollToTop";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./pages/Landing/Landing";
import Builds from "./pages/Builds/Builds";
import Services from "./pages/Services/Services";
import Renovation from "./pages/Renovation/Renovation";
import About from "./pages/About/About";
import Location from "./pages/Location/Location";
import About2 from "./pages/About2/About2";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/builds" element={<Builds />} />
          <Route path="/renovation" element={<Renovation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About2 />} />
          <Route path="/location/:location" element={<Location />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
