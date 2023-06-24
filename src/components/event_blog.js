import React from 'react'
import { event_blog_data } from './event_blog_data'
import '../styles/event_blog.css'
import Footer from './Footer';


function cards() {

  function fade() {
    var fadeElems = document.querySelectorAll('.block');
    for (var i = 0; i < fadeElems.length; i++) {
      var elem = fadeElems[i];
      var bounding = elem.getBoundingClientRect();
      if (bounding.top < window.innerHeight && bounding.bottom > 0) {
        elem.classList.add('is-visible');
      } else {
        elem.classList.remove('is-visible');
      }
    }
  }
  
  window.addEventListener('load', fade);
  
  window.addEventListener('scroll', fade);
  window.addEventListener('click', fade);

  function fade2() {
    var fadeElems = document.querySelectorAll('.container h1');
    for (var i = 0; i < fadeElems.length; i++) {
      var elem = fadeElems[i];
      var bounding = elem.getBoundingClientRect();
      if (bounding.top < window.innerHeight && bounding.bottom > 0) {
        elem.classList.add('is-visible');
      } else {
        elem.classList.remove('is-visible');
      }
    }
  }
  
  window.addEventListener('load', fade2);
  
  window.addEventListener('scroll', fade2);
  window.addEventListener('click', fade2);

  return (
    <>
    
      <div className='container'>
            <h1>Work</h1>
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
