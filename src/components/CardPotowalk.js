import React, { useState } from 'react';
import '../styles/Card.css';
import cliq from "../Photo/DSC_5249.JPG"


const CardPotowalk = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={cliq} alt='cliqevent' className="card-img" />
      {isHovered && (
        <div className="card-overlay">
          <p className="card-text">
            Club activity where participants go out to a designated location and take photographs. The goal of a photowalk is to explore new areas, practice photography skills, and meet new people who share a passion for photography
          </p>
        </div>
      )}
    </div>
  );
};

export default CardPotowalk;
