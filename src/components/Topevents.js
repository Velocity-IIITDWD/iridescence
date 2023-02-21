import React from 'react'
import CarouselComponent from './CarouselComponent'
import "../styles/Topevents.css"

function Topevents() {
  return (
    <>
        <div className='te-container'>
            <h2 className='te-heading'>Top Events</h2>
            <CarouselComponent/>
        </div>
    </>
  )
}

export default Topevents  