// import React from 'react'
// import {useRef, useCallback} from "react";
// import {useState} from 'react';

// export default function Uncontrolled() {
//   const firstname = useRef();
//   const lastname = useRef();
//   const email = useRef();
//   const secQues = useRef();
//   const secAns = useRef();
//   const bio = useRef()

//   let [err, setErr] = useState({
//     firstNameError:"",
//     lastNameError:"",
//     bioError:""
//   })

//   return (
//     <div>
//       <form>
//         <label>
//           First Name:
//           <br/>
//           <input type="text" name="firstname" ref={firstname}/>  
//           <br />
//           {err.firstNameError}  
//         </label>
//         <br/>
//         <label>
//           Last Name:
//           <br/>
//           <input type="text" name="lastname" ref={lastname} />    
//           <br />
//           {err.lastNameError}
//         </label>
//         <br/>
//         <label>
//           Email ID:
//           <br/>
//           <input type="text" name="email" ref={email}/>
//         </label>
//         <br/>
//         <label>
//           Security Question:
//           <br/>
//           <select  name="SecQues" ref={secQues}>Select an option
//               <option value="Select an option">Select an option</option>
//               <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
//               <option value="What was the name of your first pet?">What was the name of your first pet?</option>
//               <option value="What was the name of your first school?">What was the name of your first school?</option>
//           </select>
//         </label>
//         <br/>
//         <label>
//           Security Answer:
//           <br/>
//           <input type="text" name="SecAns" ref={secAns} />
//         </label>
//         <br/>
//         <label>
//             Bio:
//             <br/>
//             <textarea name="bio" ref={bio}/>
//             <br/>
//             {err.bioError}
//         </label>
//         <button>Submit</button>
//         <button onClick="this.form.reset();">Cancel</button>
//       </form>
//     </div>
//   )
// }
