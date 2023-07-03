import { useRef} from 'react'
// import { useState} from 'react'


import "../styles/Navbar.css"
import mainlogo from "../Photo/logo.png"
import {FiMenu} from 'react-icons/fi'
import { Link } from "react-router-dom";

function Navbar() {

  const handleLinkClick = () => {
    const element=menuBtn.current;
    if(element.className==='topnav responsive'){
      element.className="topnav";
    }
      
  };

  const menuBtn = useRef(null)
  
  const handleClick=()=>{
    const element=menuBtn.current
    if(element.className==='topnav'){
      element.classList.add("responsive");
    }
    else{
      element.className="topnav";
    }
  }

  return (
    <div className='topnav' id='myTopnav' ref={menuBtn}>
        <Link to='/' className='navhomelogo'onClick={handleLinkClick} ><img className='navmainlogo' src={mainlogo} alt="logo" /></Link>
        <Link to='/events' id='event-nav' className='topnav-link'  onClick={handleLinkClick}>Events</Link>
        <Link to='/lensation' className='topnav-link' onClick={handleLinkClick}>Lensation</Link>
        <Link to='/team' className='topnav-link' onClick={handleLinkClick}>Team</Link>
        <Link to='/work' className='topnav-link'  onClick={handleLinkClick}>Work</Link>
        <a href="/" className='dropdown-nav icon' onClick={handleClick}>   
            <FiMenu size={20}/>
        </a>

    </div>
  )
}

export default Navbar
