import { useRef } from 'react'
import "../styles/Navbar.css"
import mainlogo from "../Photo/logo.png"
import {RiArrowDropDownLine} from 'react-icons/ri'
import {FiMenu} from 'react-icons/fi'
import {FaInstagram,FaGoogleDrive} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import { Link } from "react-router-dom";

function Navbar() {
  
  const change=()=>{
    if(window.location.pathname==='/'){
      window.location.pathname="/#"
    }
    else if(window.location.pathname==='/team'){
      window.location.pathname="/team"
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
        <a href='/#' className='navhomelogo' ><img className='navmainlogo' src={mainlogo} alt="logo" /></a>
        <Link to='/' id='event-nav' className='topnav-link'>Events</Link>
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
        <a href='/#' className='topnav-link'>Lensation</a>
        <Link to='/team' className='topnav-link'>Team</Link>
        <a href='/#' className='topnav-link'>Work</a>
        <a href={change} className='dropdown-nav icon' onClick={handleClick} >   
            <FiMenu size={20}/>
        </a>

    </div>
  )
}

export default Navbar