import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/Contact";
import Teams from "./Pages/Teams";
import Product from "./Pages/product";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/HOME" element={<Home />}></Route>

          <Route path="/ABOUT" element={<About />}></Route>

          <Route path="/CONTACT" element={<Contact />}></Route>

          <Route path="/PRODUCT" element={<Product />}></Route>

          <Route path="/TEAMS" element={<Teams />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
