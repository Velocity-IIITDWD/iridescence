import React, { useEffect, useRef } from 'react';
import herogif from "../Photo/College_website_AdobeExpress.gif"
import { gsap, Power2 } from 'gsap';
import "../styles/Home.css";

function Home() {
    const heroRef = useRef(null);
    const sliderRef = useRef(null);
    const headlineRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(heroRef.current, { height: "0%" }, { duration: 1, height: "80%", ease: Power2.easeInOut,delay:0.6 });
        gsap.fromTo(heroRef.current, { width: "100%" }, { duration: 1.2, width: "80%", ease: Power2.easeInOut,delay:0.6 });
        gsap.fromTo(sliderRef.current, { x: "-100%" }, { duration: 1.2, x: "0%", ease: Power2.easeInOut,delay:0.4 });
        gsap.fromTo(headlineRef.current, { opacity: 0, x: 30 }, { duration: 0.5, opacity: 1, x: 0 ,delay:0.4})
    }, []);

    return (
        <>
            <div className='home-empty'>
                <div ref={heroRef} className="hero">
                    <img src={herogif} alt="heroimg" loading='lazy'></img>

                    <h1 ref={headlineRef} className="home-headline">Iridescence</h1>
                </div>
            </div>
            <div ref={sliderRef} className="home-slider"></div>
        </>
    )
}

export default Home