import React from 'react'
import "./lens-page.css"
import LensPage from './LensPage'

function Travel() {
  const galleryImages = [
    {
      img: 'https://images.pexels.com/photos/3140204/pexels-photo-3140204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      img: "https://images.pexels.com/photos/2224424/pexels-photo-2224424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/938582/pexels-photo-938582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/625455/pexels-photo-625455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/2976684/pexels-photo-2976684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/245584/pexels-photo-245584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/1636500/pexels-photo-1636500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/1585960/pexels-photo-1585960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/1576001/pexels-photo-1576001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
  return (
    <div className="all">
      <br />
      <div className='title'>
        <b>Travel.</b>
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

export default Travel