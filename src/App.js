import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Github from "./Github";
import MyWork from "./MyWork"
import './App.css';
import AboutMe from "./AboutMe";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root') // Adjust the element ID based on your HTML structure
);

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

