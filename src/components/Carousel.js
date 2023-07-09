import React, { useState } from 'react';
import '../styles/Carousel3d.css';
import img1 from "../MGphoto/_MG_1688.jpg"
import img2 from "../MGphoto/DSC_0027.jpg"
import img3 from "../MGphoto/DSC_0203.jpg"
import img4 from "../MGphoto/DSC_0210 (1).jpg"
import img5 from "../MGphoto/DSC_0334.jpg"
import img6 from "../MGphoto/IMG_8513.jpg"
import img7 from "../MGphoto/DSC_0448.jpg"
import img8 from "../MGphoto/DSC_0902 (1).jpg"

const Carousel = () => {
  const [angle, setAngle] = useState(0);

  const galleryspin = (sign) => {
    let newAngle = sign ? angle - 45 : angle + 45;
    setAngle(newAngle);
  };

  return (
    <div className='maindiv'>
      <h2>Event Memories</h2>
      <div id="carousel">
        <figure id="spinner" style={{ transform: `rotateY(${angle}deg)` }}>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
        </figure>
        <span className="ssl-icon" onClick={() => galleryspin('-')}>&lt;</span>
        <span className="ssr-icon" onClick={() => galleryspin('')}>&gt;</span>
      </div>
    </div>
  );
};

export default Carousel;
