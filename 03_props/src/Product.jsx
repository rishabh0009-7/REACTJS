// import React from 'react'

// const Product = (props) => {
    
    
//   return (
//    <>
//    <h1> mobile name = {props.title}</h1>
//    <h1> mobile brand = {props.brand}</h1>
//    <h1> mobile price = {props.price}</h1>
//    <h3>ram = {props.ram}</h3>
   
   
   
//    </>
//   )

// }


// export default Product;


//method 2 -->destructure 

import React from 'react'

const Product = ({title,brand ,price ,ram}) => {
    
    
  return (
   <>
   <h1> mobile name = {title}</h1>
   <h1> mobile brand = {brand}</h1>
   <h1> mobile price = {price}</h1>
   <h3>ram = {ram}</h3>
   
   
   
   </>
  )

}


export default Product;