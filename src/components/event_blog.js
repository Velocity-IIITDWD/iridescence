import React from 'react'
import { event_blog_data } from './event_blog_data'
import '../styles/event_blog.css'
import Footer from './Footer';

function cards() {

  return (
    <>
      <div className='container'>
        {event_blog_data.map((details) => {
          return (
            <div className='block'>
              <div className='img-container'><img src={details.image} alt="not available" /></div>
              <div className='caption'>{details.caption}</div>
              <div className='event_summary'><div>{details.event_caption}</div></div>
            </div>
          );
        })}
      </div>
      <Footer />

    </>
  )
}

export default cards
