import React from 'react'

const Person = ({name , age ,pancard}) => {

  return (
 <>
 <div>
    <h1>name = {name }</h1>
    <h3>
        {/* ternary operator --> use insetad of if else */}
        {age>18? <h1>you can drive</h1> : <h1>you cannot drive</h1>}
         {/* && operator */}
         {/* agar condn true hogi tabhi  chalega  */}

         <h2>{pancard&& <p>you can open account</p>}</h2>
        




    </h3>
 </div>
 
 
 </>
  )
}

export default Person