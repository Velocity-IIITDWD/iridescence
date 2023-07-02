import React, { useState, useEffect } from 'react';
import { Blurhash } from 'react-blurhash';
import '../styles/SlideImage.css';

function SlideImage({ image, title,bh_code }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = image;
  }, [image]);

  return (
    <div className="si-container">
      <div className="si-box" id="bxl">
        <div className="imgBox">
          <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
              <Blurhash
                hash={bh_code}
                width="30rem"
                height="30rem"
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />

          </div>
          <img
            src={image}
            alt="eachdept"
            loading="lazy"
            style={{ display: !imageLoaded ? 'none' : 'inline' }}
          />
        </div>
        <div className="si-content">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default SlideImage;
