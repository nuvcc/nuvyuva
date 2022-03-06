import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Category from './components/Category/index.js'
import Home from './components/pages';

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/event" element={<Category />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
