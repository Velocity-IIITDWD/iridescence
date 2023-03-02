import React from 'react'
import "../styles/SlideImage.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';


function SlideImage({ image, altimage, title }) {
    return (
        <div className='si-container'>
            <div className='si-box' id="bxl">
                <div className='imgBox'>
                    <LazyLoadImage
                        src={image}
                        placeholderSrc={altimage}
                        effect="blur"
                        threshold={10}
                        visibleByDefault={true}
                        delayTime={500}
                    />

                </div>
                <div className="si-content">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default SlideImage