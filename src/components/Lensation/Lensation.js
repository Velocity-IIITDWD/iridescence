import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import image1 from './images/hey1.jpeg';
import image2 from './images/hey2.jpeg';
import image3 from './images/hey3.jpeg';
import image4 from './images/hey4.jpeg';
import image5 from './images/hey5.jpeg';
import "./Lensation.css";
import logo from './logo/logo.png';
import Footer from '../Footer';
import { Link } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const imageUrls = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

const Lensation = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(sectionsRef.current).forEach((section, i) => {
      section.bg = section.querySelector(".bg");
      section.bg.style.backgroundImage = `url(${imageUrls[i % imageUrls.length]})`;
      gsap.fromTo(section.bg, {
        backgroundPosition: () => i ? `60% ${-window.innerHeight * getRatio(section)}px` : "60% 0px"
      }, {
        backgroundPosition: () => `60% ${window.innerHeight * (1 - getRatio(section))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: () => i ? "top bottom" : "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true
        }
      });
    });
  }, []);

  const getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

  return (
    <>
      <div className='logo'>
        <img src={logo} alt="lensationlgo" />
      </div>
      <div className='desc'>
          Capture the essence of Lensation, the monthly online contest organized by Iridescence club. Showcasing the best clicks on a monthly theme, this platform welcomes photographers of all skill levels to share their artistry. Unleash your creativity, and seize the opportunity to get showcased on our platforms!
      </div>
      <div className='applications'>
        July's theme - Food Photography
        <a className='app-but' href='#form-link'>
            Submit
        </a>
      </div>
      <Link to="/travel" ref={el => sectionsRef.current[0] = el} className='link'>
        <section>
          <div className="bg"></div>
          <h1 className='lensation_heading'>Travel</h1>
        </section>
      </Link>
      <Link to="/monochrome" ref={el => sectionsRef.current[1] = el} className='link'>
        <section>
          <div className="bg"></div>
          <h1 className='lensation_heading'>Monochrome</h1>
        </section>
      </Link>
      <Link to="/symmetry" ref={el => sectionsRef.current[2] = el} className='link'>
        <section>
          <div className="bg"></div>
          <h1 className='lensation_heading'>Symmetry</h1>
        </section>
      </Link>
      <Link to="/silhouette" ref={el => sectionsRef.current[3] = el} className='link'>
        <section>
          <div className="bg"></div>
          <h1 className='lensation_heading'>Silhouette</h1>
        </section>
      </Link>
      <Link to="/macro" ref={el => sectionsRef.current[4] = el} className='link'>
        <section>
          <div className="bg"></div>
          <h1 className='lensation_heading'>Macro Photography</h1>
        </section>
      </Link>
      <Footer />
    </>
  );
};

export default Lensation;
