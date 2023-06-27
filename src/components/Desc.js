import React, { useState, useEffect } from "react";
import "../styles/Desc.css";
import Animation from "./Animation";
import animationData from '../assets/camera.json'
import animationData1 from '../assets/camera_woman.json'

const TextColumn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`desc-column ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

const Desc = () => {
  return (
    <div className="desc-container">
      <div className="container-1">
        <div className="animation-container">
          <Animation animationData={animationData}/>
        </div>
        <TextColumn>
          <h2 className="dc-aim">Aim</h2>
          <p>
            Our aim is to provide a videographical and photographical platform for various academic and non-academic activities of our Institute and students and help to showcase it through social media.
          </p>
        </TextColumn>
      </div>
      <div className="container-2">
        <div className="animation-container">
          <Animation animationData={animationData1}/>
        </div>
        <TextColumn>
          <h2>Vision</h2>
          <p>
            Our vision is to leave behind a motivating example and legacy to the Institute’s future aspirants and collect memories of our college journeys. We hope to achieve greater recognition for our Institute.
          </p>
        </TextColumn>
      </div>
    </div>
  );
};

export default Desc;
