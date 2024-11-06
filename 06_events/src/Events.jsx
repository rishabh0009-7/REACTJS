import React from 'react'

const Events = () => {


    // function banana zaruri hai to use events 
    const handleClick = ()=>{
        alert("you clicked the button")
    }
  return (
    <div>
    <button onClick={handleClick}>hello</button>
    <button onMouseOver={handleClick}>hello</button>
    
    
    </div>
    
  )
}

export default Events