
import React, { useState } from "react";
import  "../CSS/form.css"
let obj={  
    email:"",
    password:"",
}
export  const Login =()=>{
const [data,setData]=useState(obj)

const handelChange=(e)=>{
const {name,value} = e.target;
setData({...data,[name]:value});
}

const handleSubmit=(e)=>{
e.preventDefault()
}

console.log(data)
return <div className="Box">
     
    <form onSubmit={handleSubmit}>
    <h1>Login </h1>
      <label>
        Email:
        <input  name="email" type="email"   onChange={handelChange}/>
      </label>
      <label>
        Password:
        <input  name="password" type="password"  onChange={handelChange}/>
      </label>
      <button    type="submit">Submit</button>
    </form>

</div>

}