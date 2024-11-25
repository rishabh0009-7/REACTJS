// props driling ko thik karna ke liye we use usecontext hook 
//props drilling --> agar component connected hai  aur props pass karna hai last walaa ko t ek ek karke sabma pass hoga fir last walaa mai jaayega 
// isliye we use usecontext  

import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Indiangov from './Pages/Indiangov'

const App = () => {
  const money = 1000
  return (
    <>
    <Router>
        <Routes>
        <Route path = "/" element = {<Indiangov money = {money}/>}/>
        </Routes>
      </Router>
    
    </>
  )
}

export default App