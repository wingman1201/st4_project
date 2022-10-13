import { useEffect, useState } from "react";
import React from 'react'

export default function Form() {
  const data = {name:"", email:"", password:""};
  const [inputData, setinputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(()=>{
    console.log("registered")
  },[flag])
  function handleData(e){
    setinputData({...inputData,[e.target.name]:e.target.value});
    console.log(inputData);
  }
  function handlesubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password){
        alert("All Fields Are Required");
    }
    else{
        setFlag(true);
    }
  }  
  return (
    <form className='container' onSubmit={handlesubmit}>
        <>
        <pre>{(flag)?<h2 className="ui-define">Hello {inputData.name}, you've Registered Successfully</h2>:""}</pre>
        </>
        <div>
            <input type = 'text' placeholder='Enter Your Name' name="name" value={inputData.name} onChange={handleData}></input>
        </div>
        <div>
            <input type = 'text' placeholder='Enter Your Email' name="email" value={inputData.email} onChange={handleData}></input>
        </div>
        <div>
            <input type = 'text' placeholder='Enter Your Password' name="password" value={inputData.password} onChange={handleData}></input>
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}
