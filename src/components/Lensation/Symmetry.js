import React from 'react'
import "./lens-page.css"
import LensPage from './LensPage'

function Symmetry() {
  
  const galleryImages = [
    {
      img: 'https://images.pexels.com/photos/5654495/pexels-photo-5654495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      img: "https://images.pexels.com/photos/6015350/pexels-photo-6015350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/17400350/pexels-photo-17400350/free-photo-of-door-inside-the-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/12739774/pexels-photo-12739774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/15781076/pexels-photo-15781076/free-photo-of-symmetrical-view-of-a-garden-in-snow-in-front-of-a-pavilion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/17107738/pexels-photo-17107738/free-photo-of-milano-palazzo-regione.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      img: "https://images.pexels.com/photos/4255726/pexels-photo-4255726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/7911758/pexels-photo-7911758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/2268487/pexels-photo-2268487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
  return (
    <div className="all">
      <br />
      <div className='title'>
        <b>Symmetry.</b>
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

export default Symmetry