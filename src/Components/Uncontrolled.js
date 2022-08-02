import React from 'react'
import {useRef, useCallback} from "react";
import {useState} from 'react';

export default function Uncontrolled() {
//   const firstname = useRef();
//   const lastname = useRef();
//   const email = useRef();
//   const secQues = useRef();
//   const secAns = useRef();
//   const bio = useRef()

let [errors, setError] = useState({
    firstNameError:"",
    lastNameError:"",
    bioError:""
})

  var handleinput = (e) =>{
    var name = e.target.name
    var value = e.target.value
    
    if (name === "firstname") {
        if ((value.length < 3 || value.length > 15) && value.length > 0) {
            setError({...errors, firstNameError:'Length should be between 3 to 15 letters.'})
        } else {
            setError({...errors, firstNameError:''})
        }
    }
    
    if (name === "lastname") {
        if ((value.length < 3 || value.length > 15) && value.length > 0) {
            setError({...errors, lastNameError:'Length should be between 3 to 15 letters.'})
        } else {
            setError({...errors, lastNameError:''})
        }
    }

    if (name === "bio") {
        if (value.length < 15 && value.length > 0){
            setError({...errors, bioError:'Length should be greater than 15 characters.'})
        } else {
            setError({...errors, bioError:''})
        }
    }
    }

  return (
    <div>
      <form>
        <label>
          First Name:
          <br/>
          <input type="text" name="firstname" onChange={handleinput}/>  
          <br />
          {errors.firstNameError}  
        </label>
        <br/>
        <label>
          Last Name:
          <br/>
          <input type="text" name="lastname" onChange={handleinput} />    
          <br />
          {errors.lastNameError}
        </label>
        <br/>
        <label>
          Email ID:
          <br/>
          <input type="text" name="email" onChange={handleinput} />
        </label>
        <br/>
        <label>
          Security Question:
          <br/>
          <select  name="SecQues" onChange={handleinput}>Select an option
              <option value="Select an option">Select an option</option>
              <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
              <option value="What was the name of your first pet?">What was the name of your first pet?</option>
              <option value="What was the name of your first school?">What was the name of your first school?</option>
          </select>
        </label>
        <br/>
        <label>
          Security Answer:
          <br/>
          <input type="text" name="SecAns" onChange={handleinput}/>
        </label>
        <br/>
        <label>
            Bio:
            <br/>
            <textarea name="bio" onChange={handleinput}/>
            <br/>
            {errors.bioError}
        </label>
        <button>Submit</button>
        <button onClick="this.form.reset();">Cancel</button>
      </form>
    </div>
  )
}
