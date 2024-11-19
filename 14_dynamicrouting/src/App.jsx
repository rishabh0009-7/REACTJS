import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dynamic from "./Dynamic";
import Coursedetail from "./Coursedetail";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
         <Route path = "/courses" element = {<Dynamic/>}/>
         <Route path = "/courses/:id" element = {<Coursedetail/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
