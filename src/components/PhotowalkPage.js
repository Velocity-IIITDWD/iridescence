import React from 'react';
import "../styles/Photowalk.css";
import udayimg from "../Photo/_MG_0675 (1).jpg";
import GalleryPhoto from './GalleryPhoto';
import pk1 from "../Photowalk/SAVE_20230212_100308.jpg";
import pk2 from "../Photowalk/SAVE_20230504_222336.jpg";
import pk3 from "../Photowalk/_MG_9950 2.jpg";
import pk4 from "../Photowalk/IMG_8034.jpg";
import pk5 from "../Photowalk/DSC_0334.jpg";
import pk6 from "../Photowalk/DSC_1037.jpg";

function PhotowalkPage() {
    return (
        <div>
            <div className='aboutphotowalk'>
                <div className='heading'><h1 className='maintitle'>Photowalk</h1></div>
                <div className='photowalkdesc'>
                    <div id='container'>
                        Explore
                        <div id='flip'>
                            <div><div>Frame</div></div>
                            <div><div>Capture</div></div>
                            <div><div>Shoot</div></div>
                        </div>
                        Connect
                    </div>
                </div>
                <div className='imagecontainer'><img src={udayimg} alt='takingphoto' /></div>
            </div>
            <div class="content">
                <div class="aboutthis">
                    <h2>What happens in a photowalk?</h2>
                    <p>Club activity where participants go out to a designated location and take photographs. The goal of a photowalk is to explore new areas, practice photography skills, and meet new people who share a passion for photography.</p>
                </div>
            </div>
            <div>
                <h1 className='galleryheading'>The Photo Gallery</h1>
                <div className='photogallery'> 
                    <GalleryPhoto img={pk1} photrapher={"Clicked by Pratik Kende"} />
                    <GalleryPhoto img={pk2} photrapher={"Clicked by Pratik Kende"} />
                    <GalleryPhoto img={pk3} photrapher={"Clicked by Pratik Kende"} />
                    <GalleryPhoto img={pk4} photrapher={"Clicked by Pratik Kende"} />
                    <GalleryPhoto img={pk5} photrapher={"Clicked by Pratik Kende"} />
                    <GalleryPhoto img={pk6} photrapher={"Clicked by Pratik Kende"} />
                </div>
  
            </div>
        </div>
    );
}

export default PhotowalkPage;
