import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Github from "./Github";
import MyWork from "./MyWork"
import './App.css';
import AboutMe from "./AboutMe";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Github" element={<Github />} />
          <Route path="/MyWork" element={<MyWork />} />
          <Route path="/AboutMe" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

