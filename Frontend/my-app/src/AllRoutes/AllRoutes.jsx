import React from 'react';
import {Routes,Route} from "react-router-dom";


export  const AllRoutes=()=>{

 return <Routes>
      <Route path='/' to= {"login"}></Route>
      <Route path='/signup' to= {"signup"}></Route>
      </Routes>
}