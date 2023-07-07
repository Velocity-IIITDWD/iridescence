import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
import mainlogo from '../Photo/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`topnav ${isMenuOpen ? 'responsive' : ''}`} id="myTopnav">
      <Link to="/" className="navhomelogo" onClick={handleLinkClick}>
        <img className="navmainlogo" src={mainlogo} alt="logo" />
      </Link>
      <Link to="/events" className="topnav-link" onClick={handleLinkClick}>
        Events
      </Link>
      <Link to="/lensation" className="topnav-link" onClick={handleLinkClick}>
        Lensation
      </Link>
      <Link to="/team" className="topnav-link" onClick={handleLinkClick}>
        Team
      </Link>
      <Link to="/work" className="topnav-link" onClick={handleLinkClick}>
        Work
      </Link>
      <a href="#!" className="dropdown-nav icon" onClick={handleClick}>
        {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </a>
    </div>
  );
}

export default Navbar;
