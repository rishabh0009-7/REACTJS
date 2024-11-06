import React from 'react'
import './Css.css'

const Css = ({brandname , model , price }) => {
    //internal css --> object banao 
    // const obj = {
    //     backgroundColor:'grey', 
    //     padding:'10px' ,
    //      margin:'20px', 
    //      borderRadius:'10px',
    //      border:'2px solid yellow'
    // } 
  return (
    // inline css
    <div // style ={{
    //     backgroundColor:'grey', 
    //     padding:'10px' ,
    //      margin:'20px', 
    //      borderRadius:'10px',
    //      border:'2px solid yellow' // }}

    // style = {obj} // this is for internal css
    
    


    // {/* for external css  classname bana do aur index.css ya fir  vahi naam rakho jo ki component ka naam hai jisme lagani hai taaki asaani raha  vaha access kar lo jaise javascript mai karta tha  bas farak yahi hai ki react mai class nhi hota isliye we use classname   id to id hi hota hai yaha 
    //   class  reserve keyword hai yaha  */}
    className="div"
    >



  
  <h3>brandname = {brandname}</h3>
  <h3>model = {model}</h3>
  <h3>price = {price}</h3>
  </div>
    
  )
}

export default Css