import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../Topphoto/_MG_0581.JPG"
import img2 from "../Topphoto/DSC_0070 (2) (1).JPG"
import img3 from "../Topphoto/DSC_0113 (2).JPG"
import img4 from "../Topphoto/DSC_0155.JPG"
import img5 from "../Topphoto/DSC_0545.JPG"
import img6 from "../Topphoto/DSC_0864 (1).JPG"
import img7 from "../Topphoto/IMG_8159.JPG"

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper" >
            <Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover centerMode >
                <div>
                    <img src={img1} alt="img1" className="cc-img"/>
                </div>
                <div>
                    <img src={img2} alt="img2" className="cc-img"/>
                </div>
                <div>
                    <img src={img3} alt="img3" className="cc-img" />
                </div>
                <div>
                    <img src={img4} alt="img3" className="cc-img" />
                </div>
                <div>
                    <img src={img5} alt="img3" className="cc-img" />
                </div>
                <div>
                    <img src={img6} alt="img3" className="cc-img" />
                </div>
                <div>
                    <img src={img7} alt="img3" className="cc-img" />
                </div>
            </Carousel>
        </div>
    );
}