// import React , {useState , useEffect} from "react";

// const Formhandle = () => {
//   const [Name, setName] = useState('');
//   const [Email, setEmail] = useState('');
//   const [Password, setPassword] = useState('');

// // form submit karne pe page reload ho raha tha par aisa nhi hona chahiye react mai  to isliye ek function banayega 

// const handleSubmit= (e)=>{
//     e.preventDefault(); // default to reload hota hai vo nhi hona dega ye 
//     alert("your form has been submitted" +Name + "" +Email + "" +Password)
// //jab submit hojaya to sab khaali hojayega
//     setName('')
//     setEmail('')
//     setPassword('')


// }


//   return (
//     <div>
//       <form onSubmit={handleSubmit} >

//         {/* starting mai form ki value name hogi then onchange pe setname mai jaayegi */}
//         <div>
//           name: <input  value = {Name}   onChange = {(e)=>setName(e.target.value)}
//           type="text" />
//         </div>
//         <div>
//           email : <input value = {Email} onChange = {(e)=>setEmail(e.target.value)} type="email" />
//         </div>
//         <div>
//           password: <input value = {Password}  onChange = {(e)=>setPassword(e.target.value)} type="password" />
//         </div>

//         <div>
//           <button>submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Formhandle;
