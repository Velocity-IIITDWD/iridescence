import React from 'react'
import "../styles/GalleryPhoto.css"

function GalleryPhoto({img,photrapher}) {
    return (
        <div className='grid-container'>
            <div>
                <img class='grid-item grid-item-1' src={img} alt='' />
                <p>{photrapher}</p>
            </div>
        </div>
    )
}

export default GalleryPhoto