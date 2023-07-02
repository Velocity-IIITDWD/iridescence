import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';

import "../styles/MembersCard.css";

const MainCard = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = props.image;
  }, [props.image]);

  function fade() {
    var fadeElems = document.querySelectorAll('.box');
    for (var i = 0; i < fadeElems.length; i++) {
      var elem = fadeElems[i];
      var bounding = elem.getBoundingClientRect();
      if (bounding.top < window.innerHeight && bounding.bottom > 0) {
        elem.classList.add('is-visible');
      } else {
        elem.classList.remove('is-visible');
      }
    }
  }

  window.addEventListener('load', fade);

  window.addEventListener('scroll', fade);
  window.addEventListener('click', fade);



  return (

    <>
      <div
        className="box"
        onClick={() => {
          setShowPopup(true);
        }}
      >
        <div style={{ display: imageLoaded ? 'none' : 'inline' ,borderRadius:'50%' }}>
          <Blurhash
            hash={props.hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
        <img alt="" src={props.image}  style={{ display: !imageLoaded ? 'none' : 'inline' }} />
        <h2>{props.name}</h2>
        <h4>{props.role}</h4>
        <h5>{props.email}</h5>
      </div>

      <div className="popup-container">
        {showPopup && (
          <div className="container-popup" onClick={() => setShowPopup(false)}>
            <div className="popup-box" >
              <img alt="" src={props.image} />
              <h2>{props.name}</h2>
              <h4>{props.role}</h4>
              <h5>{props.email}</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MainCard;
