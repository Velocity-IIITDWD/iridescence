import "./lens-page.css"
import React from 'react'
import LensPage from './LensPage'

function Macro() {
  const galleryImages = [
    {
      img: 'https://images.pexels.com/photos/4056758/pexels-photo-4056758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      img: "https://images.pexels.com/photos/8705561/pexels-photo-8705561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/8213392/pexels-photo-8213392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/15668448/pexels-photo-15668448/free-photo-of-macro-photography-by-portland-photographer-lance-reis.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/10902065/pexels-photo-10902065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/12514392/pexels-photo-12514392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/15403951/pexels-photo-15403951/free-photo-of-nature-red-flowers-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/136728/pexels-photo-136728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/3686223/pexels-photo-3686223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
  return (
    <div className="all">
      <br />
      <div className='title'>
        <b>Macro.</b>
      </div>
      <div className='line'>
      <hr  style={{
        color: '#000000',
        backgroundColor: '#000000',
        height: 2,
        borderColor : '#000000'
      }}/>
      </div>
      <div className='description'>
        These are our top 9 submissions for Macro Photography, and the enthusiasts have
        clearly outdone themselves.
      </div>
      <br /><br />
      <LensPage
        galleryImages={galleryImages}
      />
      <br /><br />
    </div>
  )
}

export default Macro