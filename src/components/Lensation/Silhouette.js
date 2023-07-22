import React from 'react'
import "./lens-page.css"
import LensPage from './LensPage'

function Silhouette() {
  const galleryImages = [
    {
      img: 'https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      img: "https://images.pexels.com/photos/2968938/pexels-photo-2968938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/343701/pexels-photo-343701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/70339/skyline-water-horizon-sunrise-70339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/4450076/pexels-photo-4450076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/12909943/pexels-photo-12909943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/5854632/pexels-photo-5854632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/4456133/pexels-photo-4456133.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/13548625/pexels-photo-13548625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
  return (
    <div className="all">
      <br />
      <div className='title'>
        <b>Silhouette.</b>
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

export default Silhouette