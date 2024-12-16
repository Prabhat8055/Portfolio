import Mesh from "./components/landingPage/Mesh";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/ThirdPage/Project";
import About from "./components/AboutMe/About";
import Contact from "./components/ForthPage/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Neuro from "./components/other/Neuromorphism/Neuro";
const App = () => {
  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <Router>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Mesh />
                <About />
                <Project />
                <Contact />
              </>
            }
          />
          {/* Bento Route */}
          <Route path="/bento" element={<Neuro />} />
          {/* <Route path="/bento" element={<Bento />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
