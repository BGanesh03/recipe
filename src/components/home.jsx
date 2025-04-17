import './home.css'
import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './navbar';
function Home(){
    const nav = useNavigate();
    return(
        <>
            <Navbar/>
            <div className="">

            </div>
        </>
    )
}

export default Home;