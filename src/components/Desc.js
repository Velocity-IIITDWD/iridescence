import React, { useState, useEffect } from "react";
import "../styles/Desc.css";

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
    <div className="desc-column" style={{ opacity: isVisible ? 1 : 0 }}>
      {children}
    </div>
  );
};

const Desc = () => {
  return (
    <div className="desc-container">
      <TextColumn>
        <h2>Aim</h2>
        <p>
          Our aim is to provide a videographical and photographical platform for various academic and non-academic activities of our Institute and students, and help to showcase it through social media. We hope to be a connecting cable for other clubs and find exposure and inspiration for our students.
        </p>
      </TextColumn>
      <TextColumn>
        <h2>Vision</h2>
        <p>
        Our vision is to leave behind a motivating example and legacy to the Institute’s future aspirants and collect memories of our college journeys. We hope to achieve greater recognition for our Institute.
        </p>
      </TextColumn>
    </div>
  );
};

export default Desc;
