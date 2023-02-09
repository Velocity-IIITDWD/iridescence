import React, { useState } from "react";

import "../styles/MembersCard.css";

const MainCard = (props) => {
  const [showPopup, setShowPopup] = useState(false);

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
