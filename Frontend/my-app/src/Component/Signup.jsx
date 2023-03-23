
import React, { useState } from "react";

let obj={
    name:"",
    email:"",
    password:"",
}
export  const Signup =()=>{
const [data,setData]=useState(obj)

const handelChange=(e)=>{
const {name,value} = e.target;
setData({...data,[name]:value});
}

const handleSubmit=(e)=>{
e.preventDefault()
}

console.log(data)
return <div>
    
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input  name="name" type="text"  onChange={handelChange}/>
      </label>
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