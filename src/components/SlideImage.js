import React from 'react'
import "../styles/SlideImage.css"

function SlideImage({image,title}) {
    return (
      <div className='si-container'>
          <div className='si-box' id="bxl">
              <div className='imgBox'>
                  <img src={image} alt='imagetaker'></img>
              </div>
              <div className="si-content">
                  <h2>{title}</h2>
              </div>
          </div>
      </div>
    )
  }
  
  export default SlideImage