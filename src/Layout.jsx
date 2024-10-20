import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar'
const Layout = ()=>{
    return (
        <>
            {/* <h1>Hello Layout...</h1> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
        </>
    )
}

export default Layout;