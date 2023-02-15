import React, { useEffect, useState} from "react";
import './Nav.css'
import { useNavigate } from "react-router-dom";

function Nav() {
    const [show, handleshow]= useState(false)
    const history = useNavigate();

    const transitionNavBar = ()=>{
        if(window.scrollY>100){
            handleshow(true);
        }
        else{
            handleshow(false);
        }
    };

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return()=>window.removeEventListener("scroll",transitionNavBar);
    }, []);


    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_content">
                <img onClick={()=>{history("/homescreen")}} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="nav_logo"></img>
                <img onClick={()=>{history("/profile")}} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" className="nav_avatar"></img>
            </div>
        </div>
    )
}

export default Nav 