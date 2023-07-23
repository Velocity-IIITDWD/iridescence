import React, { useState } from 'react';
import '../styles/videocard.css'; 

const VideoCard = ({ videoId, title }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleCardClick = () => {
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  return (
    <div className="video-card">
      <div className="thumbnail-container" onClick={handleCardClick}>
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={title}
          className="thumbnail"
        />
        <div className="thumbnail-overlay">
          <span className="play-icon">&#9654;</span>
        </div>
      </div>
      <div className="video-title">{title}</div>
      {isPopupVisible && (
        <div className="video-popup">
          <iframe
            title={title}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <button className="close-button" onClick={handlePopupClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
