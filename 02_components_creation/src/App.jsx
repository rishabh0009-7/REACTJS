import React from 'react'
import Component from './component'
import Component2 from './component2'
import { Component3 } from './component3'
import Component4 from './component4'

const App = () => {
  return (
    <>
 <Component/>
 <Component2/>

 <Component3/>
{/* reusable component */}
 <Component4/>
 <Component4/>
 <Component4/>
 <Component4/>
</>

  )
}

export default App