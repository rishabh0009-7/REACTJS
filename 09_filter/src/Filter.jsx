import React from 'react'

const Filter = () => {
    const products = [
        {id:1,title:"iphone 13", category:"mobiles", price :150000},
        {id:2,title:"hp probook", category:"laptops",price :50000},
        {id:3,title:"sony camera ",category:"camera", price :250000},
        {id:4,title:"iphone 15", category:"mobiles", price :150030},
    ]
       

        // filter hamesha return se uppar  banta hai 
        const filteredData= products.filter((data)=>data.category== "mobiles")
        console.log(filteredData); 
        // YE CONSOLE MAI SHOW HOGA ISKO SCREEN PE SHOW KARNE KE LIYE MAP USE KARNA HOGA 
  return (
    <div>

{filteredData.map((data)=><div key = {data.id}>
  <h1> Title = {data.title}</h1>
  <h2> Price = {data.price}</h2>

  </div>)}



      




    </div>
  )
}

export default Filter