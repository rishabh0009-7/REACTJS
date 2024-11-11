
import React from 'react'
import {useState, useEffect } from 'react'

const Effect2 = () => {
  const [counter, setcounter] = useState(10)
  useEffect(()=>{
    document.title = counter 
    // par increase karna pe title ki value increase and decrease nhi ho rahi aisa isliye ho raha kyuki humne useeffect dubara use nhi kara 
    console.log("use effect is running........");
    

  },[counter]) // isse kya hoga ki counter ki value jab kab change hogi tab tab hamara useeffect chalega

  return (
  <>
  <h1>{counter}</h1>
  <button onClick={()=>setcounter(counter+1)}>Increase </button>
  <button onClick={()=>setcounter(counter-1)}>decrease</button>
  
  </>
  )
}

export default Effect2