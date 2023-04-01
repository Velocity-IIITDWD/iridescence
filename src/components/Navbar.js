import { useRef} from 'react'
// import { useState} from 'react'


import "../styles/Navbar.css"
import mainlogo from "../Photo/logo.png"
import {RiArrowDropDownLine} from 'react-icons/ri'
import {FiMenu} from 'react-icons/fi'
import {FaInstagram,FaGoogleDrive} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import { Link } from "react-router-dom";

function Navbar() {

  const handleLinkClick = () => {
    const element=menuBtn.current;
    if(element.className==='topnav responsive'){
      element.className="topnav";
    }
      
  };


  const change=()=>{
    if(window.location.pathname==='/'){
      window.location.pathname="/#"
    }

  }

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
        <div className='dropdown'>
           <button className='dropbtn nav-link'>Links
                <RiArrowDropDownLine className='fa fa-caret-down' />
           </button>
           <div className='dropdown-content'>
                <a href='https://instagram.com/iridescence.iiitdwd?igshid=OGQ2MjdiOTE=' target={"_blank"} rel="noreferrer" ><FaInstagram/></a>
                <a href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=iridescence@iiitdwd.ac.in.com&tf=1' target={"_blank"} rel="noreferrer"><SiGmail/></a>
                <a href='https://drive.google.com/drive/folders/1pMXDTqqgP8FTrLndLSunWkbmLm5d4qW7?usp=sharing' target={"_blank"} rel="noreferrer" ><FaGoogleDrive/></a>
           </div>
        </div>
        <Link to='/lensation' className='topnav-link' onClick={handleLinkClick}>Lensation</Link>
        <Link to='/team' className='topnav-link' onClick={handleLinkClick}>Team</Link>
        <Link to='/work' className='topnav-link'  onClick={handleLinkClick}>Work</Link>
        <a href={change} className='dropdown-nav icon' onClick={handleClick}>   
            <FiMenu size={20}/>
        </a>

    </div>
  )
}

export default Navbar
