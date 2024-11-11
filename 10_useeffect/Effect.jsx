// USEEFFECT -->  ek component ke use and update hona se dusre pe kya eefect ataa hai  ye dikhata hai useeffect  hook  , data fetch karna ke kaam mai ataa hai , agar id hai aur array hai aur detail page chahiye kisi prodcut ka to we use effect
// jab jab browser reload hota hai tab tab ye effect chalta hai dubara

// import React from 'react'
// import {useState, useEffect } from 'react'

// const Effect = () => {
//   const [counter, setcounter] = useState(10)
//   useEffect(()=>{
//     document.title = counter 
//     // par increase karna pe title ki value increase and decrease nhi ho rahi aisa isliye ho raha kyuki humne useeffect dubara use nhi kara 
//     console.log("use effect is running........");
    

//   },[]) 
//   return (
//   <>
//   <h1>{counter}</h1>
//   <button onClick={()=>setcounter(counter+1)}>Increase </button>
//   <button onClick={()=>setcounter(counter-1)}>decrease</button>
  
//   </>
//   )
// }

// export default Effect