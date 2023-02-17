import React, {useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Power2 } from "gsap";
import "../styles/PageLoading.css"


const PageLoading = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".welcome-message", {
      duration: 1,
      opacity: 1,
      y: "0%",
      ease: Power2.easeOut,
      onComplete: () => {
        gsap.to(".message", {
          opacity: 0
        })
      }
    })
    .to(textRef.current, {
      duration: 2,
      color: "#000000",
      repeat: -1,
      yoyo: true,
    },"-=0.4")
      .to(".welcome-logo", {
        duration: 1,
        opacity: 1,
        ease: Power2.easeOut
      })
      .to(".black-screen", {
        duration: 1,
        opacity: 0,
        onComplete: () => setIsLoaded(true)
      });
  }, []);

  if (!isLoaded) {
    return (
      <div className="black-screen">
        <h1 className="welcome-message" ref={textRef}>Welcome</h1>
        <div className="welcome-logo"></div>
      </div>
    );
  }
};

export default PageLoading;
