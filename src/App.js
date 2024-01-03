import React from "react";
import ScrollToTop from "./scrollToTop";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from "./pages/Landing/Landing";
import Builds from "./pages/Builds/Builds";
import Services from "./pages/Services/Services";
import Remodling from "./pages/Remodling/Remodling";
import About from "./pages/About/About";
import Location from "./pages/Location/Location";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/builds" element={<Builds />} />
          <Route path="/services" element={<Services />} />
          <Route path="/remodling" element={<Remodling />} />
          <Route path="/about" element={<About />} />
          <Route path="/location/:location" element={<Location />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
