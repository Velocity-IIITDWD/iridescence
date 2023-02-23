import React from 'react'
import "../styles/Features.css";
import SlideImage from "./SlideImage"
import photographer from "../Photo/IMG_4062.JPG"
import videography from "../Photo/IMG_8517.JPG"
import editing from "../Photo/editing.jpg"
import content from "../Photo/content.jpg"

import Lphotographer from "../Photo/LIMG_4062.JPG.jpeg"
import Lvideography from "../Photo/LIMG_8517.JPG.jpeg"
import Lediting from "../Photo/Lediting.jpeg"
import Lcontent from "../Photo/Lcontent.jpeg"

function Features() {
  return (
    <>
      <div className='ft-textslide'>
        <div className='ft'>
          <h3 className='ft-clubdesc'>The Photography, Videography & Editing Club of IIIT Dharwad.</h3>
        </div>
        <div className="ft-photo">
          <SlideImage image={photographer} altimage={Lphotographer} title="Photographer" />
        </div>
        <div className="ft-video">
          <SlideImage image={videography} altimage={Lvideography} title="Videography" />
        </div>
        <div className="ft-edit">
          <SlideImage image={editing} altimage={Lediting} title="Editing" />
        </div>
        <div className="ft-content">
          <SlideImage image={content} altimage={Lcontent} title="Content" />
        </div>

      </div>
    </>
  )
}

export default Features