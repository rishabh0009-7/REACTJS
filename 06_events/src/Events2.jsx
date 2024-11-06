//  passing argument to event handles


import React from 'react'

const Events2 = () => {
    const  addition =(a)=>{
        alert(a+10 )

    }
  return (
    <div>
{/* <button onClick={addition(10)}>button</button>  */}
{
/* /* aise nhi karna varna kya hoga ki bina click kara hi reload pe  apna aap chal jaayega  isliye function mai daalega  */ }


<button onClick={()=>addition(10)}>button</button>
{/* callback mai call karna hai  */}



    </div>
  )
}

export default Events2