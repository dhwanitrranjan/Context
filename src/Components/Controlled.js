import React from 'react';
import {useState} from 'react';

export default function Controlled() {
    let [form, setForm] = useState({
        firstname:"",
        lastname:"",
        mail:"",
        SecQues:"",
        SecAns:"",
        bio:""
    })

    let [isDisabled, setDisabled] = useState(true)

    let [errors, setError] = useState({
        firstNameError:"",
        lastNameError:"",
        bioError:""
    })

    var handleInput = (e) =>{
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

        setForm({...form,[name]:value})

        console.log(errors)
        console.log(form)
        if (errors.firstNameError === '' && errors.lastNameError === '' && errors.bioError === '' && 
        form.firstname.length > 0 && form.lastname.length > 0 && form.bio.length > 0 &&
        form.mail.length > 0 && form.SecQues!=='Select an option' && form.SecAns.length > 0){
            setDisabled(false)
        }
    }

    var handleSubmit = (e) =>{
        console.log(form)
        e.preventDefault()
    }

    return (
        <div>
            <form>
                <label>
                    First Name:
                    <br/>
                    <input type="text" name="firstname" onChange={handleInput}/>  
                    <br />
                    {errors.firstNameError}  
                </label>
                <br/>
                <label>
                    Last Name:
                    <br/>
                    <input type="text" name="lastname" onChange={handleInput}/>    
                    <br />
                    {errors.lastNameError}
                </label>
                <br/>
                <label>
                    Email ID:
                    <br/>
                    <input type="text" name="mail" onChange={handleInput}/>
                </label>
                <br/>
                <label>
                    Security Question:
                    <br/>
                    <select onChange={handleInput} name="SecQues" >Select an option
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
                    <input type="text" name="SecAns" onChange={handleInput}/>
                </label>
                <br/>
                <label>
                    Bio:
                    <br/>
                    <textarea name="bio" onChange={handleInput}/>
                    <br/>
                    {errors.bioError}
                </label>
                <button onClick={handleSubmit} disabled={isDisabled}>Submit</button>
                <button onClick="this.form.reset();">Cancel</button>
            </form>
        </div>
    )
}
