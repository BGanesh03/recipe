import './home.css'
import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './navbar';
import Feed from './feed';
function Home(){
    const nav = useNavigate();
    return(
        <>
            <Navbar/>
            <div className='search'>
                <input type="text" placeholder='Search Receipes....'/>
                <i class=""></i>
            </div>
            <div className='feed'>
            <Feed/>
            <Feed/>
            </div>
            
            <div className="">

            </div>
        </>
    )
}

export default Home;