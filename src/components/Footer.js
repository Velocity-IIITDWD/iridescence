import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Clique</h3>
        <a href="https://youtu.be/WXdAX0No2hM" target={'_blank'} className="footer-link" rel="noreferrer">Be a better photographer</a>
        <a href="https://youtu.be/LxO-6rlihSg" target={'_blank'} className="footer-link" rel="noreferrer">Learn Photography</a>
        <a href="https://youtu.be/YTl9-VWe1xg" target={'_blank'} className="footer-link" rel="noreferrer">Macro Photography</a>
      </div>
      <div className="footer-column">
        <h3>Events</h3>
        <a href="#/" className="footer-link">Rush 2.0</a>
        <a href="#/" className="footer-link">GDSC X Velocity</a>
        <a href="#/" className="footer-link">Republic Day</a>
      </div>
      <div className="footer-column">
        <h3>Contact Us</h3>
        <a href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=iridescence@iiitdwd.ac.in.com&tf=1' target={"_blank"} rel="noreferrer" className="footer-link">Email</a>
        <a href='https://instagram.com/iridescence.iiitdwd?igshid=OGQ2MjdiOTE=' target={"_blank"} rel="noreferrer" className="footer-link">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
