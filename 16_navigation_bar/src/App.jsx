import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dynamic from "./Dynamic";
import Coursedetail from "./Coursedetail";
import Navigatehook from "./Navigatehook";
import Navbar from "./Navbar";
// JO CHEEZ  sab pages mai  common hoti hai jaie ki header footer navbar ye app .jsx mai ataa hai 
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
         <Route path = "/courses" element = {<Dynamic/>}/>
         <Route path = "/courses/:id" element = {<Coursedetail/>}/>
         <Route path = "/navigate" element = {<Navigatehook/>}/>
         <Route path = "/Dahboard" element = {<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
