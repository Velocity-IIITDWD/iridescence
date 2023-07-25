import React from 'react';
import "../../styles/Photowalk.css";
import GalleryPhoto from '../../components/GalleryPhoto';
import udayimg from "../../ImagesFolder/Photo/_MG_0675 (1).jpg";
import pk1 from "../../ImagesFolder/Photowalk/SAVE_20230212_100308.jpg";
import pk2 from "../../ImagesFolder/Photowalk/SAVE_20230504_222336.jpg";
import pk3 from "../../ImagesFolder/Photowalk/_MG_9950 2.jpg";
import pk4 from "../../ImagesFolder/Photowalk/IMG_8034.jpg";
import pk5 from "../../ImagesFolder/Photowalk/DSC_0334.jpg";
import pk6 from "../../ImagesFolder/Photowalk/DSC_1037.jpg";

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
            <div className="content">
                <div className="aboutthis">
                    <h2>What happens in a photowalk?</h2>
                    <p>Club activity where participants go out to a designated location and take photographs. The goal of a photowalk is to explore new areas, practice photography skills, and meet new people who share a passion for photography.</p>
                </div>
            </div>
            <div>
                <h1 className='galleryheading'>The Photo Gallery</h1>
                <div className='photogallery'> 
                    <GalleryPhoto img={pk1} photographer={"Clicked by Pratik Kende"} />
                    <GalleryPhoto img={pk2} photographer={"Clicked by Pratik Kende"} />
                    <GalleryPhoto img={pk3} photographer={"Clicked by Pratik Kende"} />
                    <GalleryPhoto img={pk4} photographer={"Clicked by Pratik Kende"} />
                    <GalleryPhoto img={pk5} photographer={"Clicked by Pratik Kende"} />
                    <GalleryPhoto img={pk6} photographer={"Clicked by Pratik Kende"} />
                </div>
  
            </div>
        </div>
    );
}

export default PhotowalkPage;
