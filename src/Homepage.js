import React,{useState} from "react";
import Nav from './Nav';
import { Outlet } from 'react-router-dom';
function HomePage() {
    
  return (
    <>
        <Nav/>
      <Outlet/>
    </>
  );
}


export default HomePage;
