import React from 'react'
import "../../styles/lens-page.css"
import LensPage from './LensPage'

function Monochrome() {
  const galleryImages = [
    {
      img: 'https://images.pexels.com/photos/1203819/pexels-photo-1203819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      img: "https://images.pexels.com/photos/3267673/pexels-photo-3267673.jpeg"
    },
    {
      img: "https://images.pexels.com/photos/5990738/pexels-photo-5990738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/638341/pexels-photo-638341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/4059426/pexels-photo-4059426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/7356913/pexels-photo-7356913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/6131873/pexels-photo-6131873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/136728/pexels-photo-136728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      img: "https://images.pexels.com/photos/12036986/pexels-photo-12036986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
  return (
    <div className="all">
      <br />
      <div className='title'>
        <b>Monochrome.</b>
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

export default Monochrome