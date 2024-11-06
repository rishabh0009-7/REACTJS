import React from 'react'
import { useState } from 'react'

const Usestate2 = () => {
   
    const [counter,setCounter] = useState(0)

    //we can also create arrays and object 
    // const [arr, setArr] = useState(10,20,30)
    // const [obj, setObj] = useState({
    //     name:"rishabh",
    //     salary:"150000"
    // })

    const increaseby1 =()=>{
        setCounter(counter+1);
        console.log("counter=",counter);
        
    }


    const decreaseby1 =()=>{
        setCounter(counter-1);
        console.log("counter=",counter);
        
    }
  return (
    <div>

        {/* <h1>{obj.name}</h1>
        <h1>{obj.salary}</h1> */}
<h1>counter:{counter} </h1>
 <button onClick={increaseby1}>increaseby1</button>
<button onClick={decreaseby1}>decreaseby1</button> 




    </div>
  )
}

export default Usestate2