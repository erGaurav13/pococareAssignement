const express = require("express");
const PORT=8080;

const app= express();


app.get("/",(req,res)=>{
    return res.send("Hi")
})

app.listen(PORT,()=>{
console.log(`server started at ${PORT}`)
})