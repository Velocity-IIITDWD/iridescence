import React, { useEffect, useRef, useState } from 'react';
import { gsap, Power2 } from 'gsap';
import "../styles/Home.css";
import herogif from "../ImagesFolder/Photo/h_College_website_AdobeExpress.gif";
import heropng from "../ImagesFolder/Photo/l_College_website_AdobeExpress_11zon.png";

function Home() {
  const heroRef = useRef(null);
  const sliderRef = useRef(null);
  const headlineRef = useRef(null);
  const [gifLoaded, setGifLoaded] = useState(false);

  useEffect(() => {
    gsap.fromTo(heroRef.current, { height: "0%" }, { duration: 1, height: "80%", ease: Power2.easeInOut, delay: 0.6 });
    gsap.fromTo(heroRef.current, { width: "100%" }, { duration: 1.2, width: "80%", ease: Power2.easeInOut, delay: 0.6 });
    gsap.fromTo(sliderRef.current, { x: "-100%" }, { duration: 1.2, x: "0%", ease: Power2.easeInOut, delay: 0.4 });
    gsap.fromTo(headlineRef.current, { opacity: 0, x: 30 }, { duration: 0.5, opacity: 1, x: 0, delay: 0.4 });
  }, []);

  const handleGifLoad = () => {
    setGifLoaded(true);
  };

  return (
    <>
      <div className='home-empty'>
        <div ref={heroRef} className="hero">
          {gifLoaded ? (
            <img src={herogif} alt="heroimg" loading='lazy'></img>
          ) : (
            <img
              src={heropng}
              alt="heroimg"
              loading='lazy'
              onLoad={handleGifLoad} // Add onLoad event listener
            ></img>
          )}

          <h1 ref={headlineRef} className="home-headline">Iridescence</h1>
        </div>
      </div>
      <div ref={sliderRef} className="home-slider"></div>
    </>
  );
}

export default Home;
