import React from 'react';
import "../../styles/WorkshopPage.css";
import mainimg from "../../ImagesFolder/Photo/Screenshot_20230629-231915_Instagram.jpg";
import GalleryPhoto from '../../components/GalleryPhoto';
import pk1 from "../../ImagesFolder/Workshop/Screenshot 2023-06-30 164117.png";
import pk2 from "../../ImagesFolder/Workshop/Screenshot 2023-06-30 164156.png";
import pk3 from "../../ImagesFolder/Workshop/Screenshot 2023-06-30 164213.png";
import pk4 from "../../ImagesFolder/Workshop/Screenshot 2023-06-30 164223.png";
import pk5 from "../../ImagesFolder/Workshop/Screenshot 2023-06-30 164237.png";
import pk6 from "../../ImagesFolder/Workshop/Screenshot 2023-06-30 164257.png";

import VideoCard from '../../components/VideoCard';

function WorkshopPage() {
    const videos = [
        {
            id: 'WXdAX0No2hM',
            title: 'Be a Better Photographer in 45 mins by Sudhir Shivaram Photography',
        },
        {
            id: 'IyR_uYsRdPs',
            title: 'Photoshop for Beginners by Envato Tuts+',
        },
        {
            id: 'keoszhf4DZ8',
            title: 'Premiere Pro Tutorial for Beginners 2023 - Everything You NEED to KNOW! by Vince Opra',
        },
        {
            id: 'SlNviMsi0K0',
            title: 'CAMERA ANGLES to Enhance Your Films by Parker Walbeck',
        },
    ];

    return (
        <div>
            <div className='aboutphotowalk'>
                <div className='heading'><h1 className='maintitle'>Beginners Workshop</h1></div>
                <div className='photowalkdesc'>
                    <div id='container'>
                        Develop
                        <div id='flip'>
                            <div><div>Master</div></div>
                            <div><div>Ace</div></div>
                            <div><div>Refine</div></div>
                        </div>
                        Embrace
                    </div>
                </div>
                <div className='imagecontainer'><img src={mainimg} alt='takingphoto' /></div>
            </div>
            <div className="content">
                <div className="aboutthis">
                    <h2>What happens in this workshop?</h2>
                    <p>In club comprehensive photography workshop aimed at improving skills in using a DSLR camera. This workshop covered the basics of photography and provide hands-on training on how to effectively use a DSLR camera.</p>
                </div>
            </div>
            <div>
                <h1 className='galleryheading'>Glimpse from PPT</h1>
                <div className='photogallery'>
                    <GalleryPhoto img={pk1} photographer={"By Ashith Shetty"} />
                    <GalleryPhoto img={pk2} photographer={"By Ashith Shetty"} />
                    <GalleryPhoto img={pk3} photographer={"By Ashith Shetty"} />
                    <GalleryPhoto img={pk4} photographer={"By Ashith Shetty"} />
                    <GalleryPhoto img={pk5} photographer={"By Ashith Shetty"} />
                    <GalleryPhoto img={pk6} photographer={"By Ashith Shetty"} />
                </div>
                <div className='tutorial_container'>
                    <h2>Recommended Tutorial's</h2>
                    <div className='video-container'>
                        {videos.map((video) => (
                            <VideoCard key={video.id} videoId={video.id} title={video.title} />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default WorkshopPage;
