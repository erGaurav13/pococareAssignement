const express = require('express');
 

const UserRouter=express.Router();


UserRouter.post("/signup",(req,res)=>{
    res.send("signup")
})

UserRouter.post("/login",(req,res)=>{
    res.send("Login")
})

module.exports=UserRouter;