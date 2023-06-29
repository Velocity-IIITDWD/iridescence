import React, { useState } from 'react';
import '../styles/Card.css';
import lcliq from "../Photo/lowDSC_5249 (1).jpeg"

const CardPotowalk = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={lcliq} alt='cliqevent' className="card-img" />
      <div className="card-overlay">
        <p className={`card-text ${isHovered ? 'raised' : ''}`}>
        Club activity where participants go out to a designated location and take photographs. The goal of a photowalk is to explore new areas, practice photography skills, and meet new people who share a passion for photography.
        </p>
        {isHovered && <button className="know-more-button">Know More</button>}
      </div>
      
    </div>
  );
};

export default CardPotowalk;
