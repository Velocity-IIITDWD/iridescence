import React from 'react';
import "../styles/Copyright.css"
const Footer = () => {
  return (
    <footer>
      <p className='copyrightmessage'>&copy; {new Date().getFullYear()} Iridescence iiitdwd. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
