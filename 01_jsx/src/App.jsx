// import React from 'react'

// const App = () => {
//   return (
//     // this is jsx 
//     <div>App
//       {/* how to write js in html  */}
// <h1>{2+4}</h1> 


//     </div> 

    
//   )
// }

// export default App


//how to write variables in jsx 
//always write inside curly braces not inside return 
// import React from 'react'

// const App = () => {
//   const name = "rishabh "
//   return (
//     <div>

//       <h1>{name}</h1>
//     </div>
//   )
// }

// export default App


// creating an object in jsx 
// import React from 'react'

// const App = () => {
//   const person ={
//     name:"rishabh",
//     age:21,
//     gmail:"rishabletsdoit7838@gmail.com"


   


//   }
//   return (
//     <div>
//       <h1>NAME = {person.name}</h1>
//       <h1>AGE = {person.age}</h1>
//       <h1>GMAIL = {person.gmail}</h1>
//     </div>
//   )
// }

// export default App

//note --> ek timepe function ek hi cheez return kar skta hai isliye usme ek hi div banega usse zyada banaaya to error aayega 
//ek div mai multiple cheezein rakh skta hai par multiple div nhi 

// import React from 'react'

// const App = () => {
//   const person ={
//     name:"rishabh",
//     age:21,
//     gmail:"rishabletsdoit7838@gmail.com"


//     
//     }
// const product = {
//   //       title:"iphone",
//   //       model :"iphone-16",
//   //       price:"150000"


//   }
//   return (
//     <div>
//       <h1>NAME = {person.name}</h1>
//       <h1>AGE = {person.age}</h1>
//       <h1>GMAIL = {person.gmail}</h1>
//     </div>
//     <div>
//       {/* error aayega  */}
//     </div>
//   )
// }

// export default App



// erro se bachna ke liye <></>(fragment )iska andar div banayega ab hum multiple div bna skta hai 
//fragment use karke hum ek saath multiple div return kar skta hai 

import React from 'react'

const App = () => {
  const person ={
    name:"rishabh",
    age:21,
    gmail:"rishabletsdoit7838@gmail.com"


   

  }
  const product = {
    title:"iphone",
    model :"iphone-16",
    price:"150000"
  }

  return (
    <>
    <div>
      <h1>NAME = {person.name}</h1>
      <h1>AGE = {person.age}</h1>
      <h1>GMAIL = {person.gmail}</h1>
    </div>
    <div>
      <h1>title = {product.title}</h1>
    </div>
    </>
  )
}

export default App