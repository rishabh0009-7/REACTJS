// AGAR MULTIPLE INPUTS HO TO AISE MULTIPLE USE STATE THODI BANAYEGA
//govt website mai form bharta hai to 100 inputs hota hai sabka state thodi bnayega
//to hum use state ek hi banayega par uske andar objct banayega

import React, { useState } from "react";

const Multipleinputhandle = () => {
  const [Formdata, setFormdata] = useState({
    //starting mai
    Name: "",
    Email: "",
    Password: "",
    Age: "",
  });

  const onChangeHandler = (e)=>{
    const {name, value} = e.target
    setFormdata ({...Formdata, [name]:value})
    
  // iska matlab hai pehle jo data ha vaise hi raha  ba susme new data merge kardo 

  }
  const onSubmitHandler=(e)=>{
    e.preventDefault()
    alert("your form has been submitted")

    console.log(Formdata);

    //submit ke baad khaali hojaya 
    setFormdata({
      Name: "",
      Email: "",
      Password: "",
      Age: "",
    })
    
  }

  return (
    <>
      <form  onSubmit={onSubmitHandler}>
        <div>
          {/* name jo ha vo ek attribute ha isma  */}
          name: <input value={Formdata.Name} name="Name"  onChange = {onChangeHandler}  type="text" />
        </div>
        <div>
          Email: <input value={Formdata.Email} name="Email" 
          onChange = {onChangeHandler} type="email" />
        </div>
        <div>
          Password:{" "}
          <input value={Formdata.Password} name="Password" onChange = {onChangeHandler} type="password" />
        </div>
        <div>
          Age: <input value={Formdata.Age} name="Age" onChange = {onChangeHandler} type="number" />
        </div>

        <div>
          <button>submit</button>
        </div>
      </form>
    </>
  );
};

export default Multipleinputhandle;
