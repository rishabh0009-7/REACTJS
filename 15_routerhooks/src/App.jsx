import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dynamic from "./Dynamic";
import Coursedetail from "./Coursedetail";
import Navigate from "./Navigate";
import Navbar from "./Navbar";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
         <Route path = "/courses" element = {<Dynamic/>}/>
         <Route path = "/courses/:id" element = {<Coursedetail/>}/>
         <Route path = "/navigate" element = {<Navigate/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
