import React, { useState } from "react";

import "../styles/MembersCard.css";

const MainCard = (props) => {
  const [showPopup, setShowPopup] = useState(false);

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
        <img alt="" src={props.image} />
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
