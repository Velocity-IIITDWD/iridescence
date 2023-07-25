import React from 'react'
import "../styles/Features.css";
import SlideImage from "./SlideImage"
import Lphotographer from "../ImagesFolder/Photo/LIMG_4062.JPG.jpeg"
import Lvideography from "../ImagesFolder/Photo/LIMG_8517.JPG.jpeg"
import Lediting from "../ImagesFolder/Photo/Lediting.jpeg"
import Lcontent from "../ImagesFolder/Photo/Lcontent.jpeg"

function Features() {
  return (
    <>
      <div className='ft-textslide'>
        <div className='ft'>
          <h3 className='ft-clubdesc'>The Photography, Videography & Editing Club of IIIT Dharwad.</h3>
        </div>
        <div className="ft-photo">
          <SlideImage image={Lphotographer} title="Photographer" bh_code="L16RAW_N02Vr?b?bD%9F0Loc^NRk" />
        </div>
        <div className="ft-video">
          <SlideImage image={Lvideography} title="Videography"  bh_code="LWF65]WAtRM{~qadt7jZWBWBWBt7"/>
        </div>
        <div className="ft-edit">
          <SlideImage image={Lediting} title="Editing" bh_code="LPGutF~X?b%Mb_-;x]%2xsWBj[jb" />
        </div>
        <div className="ft-content">
          <SlideImage image={Lcontent} title="Content" bh_code="L5FYoj~W004TS9~q56t-00XOV=-;" />
        </div>

      </div>
    </>
  )
}

export default Features