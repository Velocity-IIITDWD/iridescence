import React from 'react'
import "../styles/Features.css";
import SlideImage from "./SlideImage"
import photographer from "../Photo/IMG_4062.JPG"
import videography from "../Photo/IMG_8517.JPG"
import editing from "../Photo/editing.jpg"
import content from "../Photo/content.jpg"
function Features() {
  return (
    <>
      <div className='ft-textslide'>
        <div className='ft'>
          <h3 className='ft-clubdesc'>The Photography, Videography & Editing Club of IIIT Dharwad.</h3>
        </div>
        <div className="ft-photo">
          <SlideImage image={photographer} title="Photographer" />
        </div>
        <div className="ft-video">
          <SlideImage image={videography} title="Videography" />
        </div>
        <div className="ft-edit">
          <SlideImage image={editing} title="Editing" />
        </div>
        <div className="ft-content">
          <SlideImage image={content} title="Content" />
        </div>

      </div>
    </>
  )
}

export default Features