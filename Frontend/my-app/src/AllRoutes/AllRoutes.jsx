import React from 'react';
import {Routes,Route} from "react-router-dom";
import { Login } from '../Component/Login';
import { Signup } from '../Component/Signup';


export  const AllRoutes=()=>{

 return <Routes>
      <Route path='/' element= {<Login/>}></Route>
      <Route path='/signup' element= {<Signup/>}></Route>
      </Routes>
}