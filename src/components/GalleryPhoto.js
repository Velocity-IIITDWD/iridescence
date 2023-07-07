import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Blurhash } from 'react-blurhash';
import "../styles/GalleryPhoto.css";


function GalleryPhoto({ img, photographer }) {
  return (
    <div className="grid-container">
      <div>
        <LazyLoadImage
          className="grid-item grid-item-1"
          src={img}
          alt=""
          effect="blur" 
          placeholder={
            <Blurhash
              hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
              width="100%"
              height="100%"
              resolutionX={32}
              resolutionY={32}
            />
          }
        />
        <p>{photographer}</p>
      </div>
    </div>
  );
}

export default GalleryPhoto;
