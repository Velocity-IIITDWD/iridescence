import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaInstagram, FaGithub, FaLink } from 'react-icons/fa';
import {BiLogoGmail} from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <h6>About</h6>
            <p className="text-justify">The official website for the Photography, Videography & Editing Club of IIIT Dharwad.
A dash of shades and hues immortalized through lens.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Pages</h6>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/lensation">Lensation</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/work">Work</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/photowalk">Photowalk</Link></li>
              <li><Link to="/workshop">Workshop</Link></li>
              <li><a href="https://drive.google.com/drive/u/0/folders/1pMXDTqqgP8FTrLndLSunWkbmLm5d4qW7" target="__blank">Drive Link</a></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeTFI768bzmh2v8HSZzIDJKd93gfVM7G608ZMOhtq55DB9nyg/viewform" target="__blank">Lensation</a></li>
              <li><a href="https://www.canva.com/design/DAFQu_ET014/s1RnqF3fOlIfwggVUySXFA/edit?analyticsCorrelationId=d94adc03-1032-461c-99bb-e2bdd162a6df" target="__blank">Work Shop Pdf</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-2 col-xs-10">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
              <a href="/"> Iridescence</a>.
            </p>
          </div>

          <div className="col-md-8 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.instagram.com/iridescence.iiitdwd/" target="__blank"><FaInstagram /></a></li>
              <li> <a href={`mailto:${'iridescence@iiitdwd.ac.in'}` }target="__blank"><BiLogoGmail /></a></li> 
              <li><a className="dribbble" href="https://github.com/Velocity-IIITDWD/iridescence" target="__blank"><FaGithub /></a></li>
              <li><a className="linkedin" href="https://linktr.ee/iridescence.iiitdwd/" target="__blank"><FaLink/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
