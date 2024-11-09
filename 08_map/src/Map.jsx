import React from 'react'
// jab bhi koio data  hai array ke andar object mai aur usko ui  mai show karna hai to map use karenge 

const Map = () => {
    let products = [
        {id:1,title:"iphone 13", price :150000},
        {id:2,title:"iphone 14", price :150000},
        {id:3,title:"iphone 15", price :150000}
      ]

  return (
<>
<h1>map</h1>
<div>
  {/* yaha map mai hmesha ek key pass karege jo ki unique hogi  */}
{products.map((data)=><div key = {data.id}>
  <h1> Title = {data.title}</h1>
  <h2> Price = {data.price}</h2>

</div>)}






</div>
</>

  )
}

export default Map



