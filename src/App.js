import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
