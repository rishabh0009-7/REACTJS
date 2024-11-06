import React from 'react'
import Product from './product'

const App = () => {
  return (
   <>

   {/* ab hum chahte hai ki jab bhi reusable component use kara to uska data andar ka alag ho  uske liye we use props   object yaha banayega  vaha bas format hoga uska */}

   {/* reusable component but with  different data --> we use props   */}
   <Product title = "galaxy s24 ultra " brand = "samsung " price = {150000}
   ram ="12gb"
   
   />
   <Product title = "iphone -16" brand = "apple " price = {75000}/>
   <Product title = "one plus 13" brand = "one plus  " price = {35000}/>
   
   
   </>

  )
}

export default App;