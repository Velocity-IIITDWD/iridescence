import React, { useState } from 'react';
import '../styles/Card.css';

import cliq from "../Photo/DSC_5256.JPG"

const CardWorkshop = () => {
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
          In club comprehensive photography workshop aimed at improving skills in using a DSLR camera. This workshop covered the basics of photography and provide hands-on training on how to effectively use a DSLR camera. 
          </p>
        </div>
      )}
    </div>
  );
};

export default CardWorkshop;
