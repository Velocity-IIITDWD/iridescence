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

  let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

  return (
    <>
      <div className='logo'>
            <img src={logo} alt="lensationlgo"/>
      </div>
      <section ref={el => sectionsRef.current[0] = el}>
        <div className="bg"></div>
        <h1 className='lensation_heading'>Travel</h1>
      </section>
      <section ref={el => sectionsRef.current[1] = el}>
        <div className="bg"></div>
        <h1 className='lensation_heading'>Monochrome</h1>
      </section>
      <section ref={el => sectionsRef.current[2] = el}>
        <div className="bg"></div>
        <h1 className='lensation_heading'>Symmetry</h1>
      </section>
      <section ref={el => sectionsRef.current[3] = el}>
        <div className="bg"></div>
        <h1 className='lensation_heading'>Silhouette</h1>
      </section>
      <section ref={el => sectionsRef.current[4] = el}>
        <div className="bg"></div>
        <h1 className='lensation_heading'>Macro Photography</h1>
      </section>
      <Footer/>

    </>
  );
};

export default Lensation;
