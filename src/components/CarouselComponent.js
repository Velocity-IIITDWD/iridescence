import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Blurhash } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img1 from "../ImagesFolder/Topphoto/compressed/_MG_0581-min.JPG";
import img2 from "../ImagesFolder/Topphoto/compressed/DSC_0070 (2) (1)-min.JPG";
import img3 from "../ImagesFolder/Topphoto/compressed/DSC_0113 (2)-min.JPG";
import img4 from "../ImagesFolder/Topphoto/compressed/DSC_0155-min.JPG";
import img5 from "../ImagesFolder/Topphoto/compressed/DSC_0545-min.JPG";
import img6 from "../ImagesFolder/Topphoto/compressed/DSC_0864 (1)-min.JPG";
import img7 from "../ImagesFolder/Topphoto/compressed/IMG_8159-min.JPG";
import "../styles/carousel.css"


export default function CarouselComponent() {
    return (
      <div className="carousel-wrapper">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          stopOnHover
          emulateTouch
          centerMode
          swipeable
          centerSlidePercentage="60"
            
        >
          <div>
            <LazyLoadImage
              src={img1}
              alt="img1"
              effect="blur"
              placeholder={
                <Blurhash
                  hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                  width="100%"
                  height="100%"
                  resolutionX={32}
                  resolutionY={32}
                />
              }
            />
          </div>
          <div>
            <LazyLoadImage
              src={img2}
              alt="img2"
              effect="blur"
              placeholder={
                <Blurhash
                  hash="LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
                  width="100%"
                  height="100%"
                  resolutionX={32}
                  resolutionY={32}
                />
              }
            />
          </div>
          <div>
            <LazyLoadImage
              src={img3}
              alt="img3"
              effect="blur"
              placeholder={
                <Blurhash
                  hash="L7o;~Xn$}Wj]0#ogtKj[7odV9^NH"
                  width="100%"
                  height="100%"
                  resolutionX={32}
                  resolutionY={32}
                />
              }
            />
          </div>
          <div>
            <LazyLoadImage
              src={img4}
              alt="img4"
              effect="blur"
              placeholder={
                <Blurhash
                  hash="L7o;~Xn$}Wj]0#ogtKj[7odV9^NH"
                  width="100%"
                  height="100%"
                  resolutionX={32}
                  resolutionY={32}
                />
              }
            />
          </div>
          <div>
            <LazyLoadImage
              src={img5}
              alt="img5"
              effect="blur"
              placeholder={
                <Blurhash
                  hash="L7o;~Xn$}Wj]0#ogtKj[7odV9^NH"
                  width="100%"
                  height="100%"
                  resolutionX={32}
                  resolutionY={32}
                />
              }
            />
          </div>
          <div>
            <LazyLoadImage
              src={img6}
              alt="img6"
              effect="blur"
              placeholder={
                <Blurhash
                  hash="L7o;~Xn$}Wj]0#ogtKj[7odV9^NH"
                  width="100%"
                  height="100%"
                  resolutionX={32}
                  resolutionY={32}
                />
              }
            />
          </div>
          <div>
            <LazyLoadImage
              src={img7}
              alt="img7"
              effect="blur"
              placeholder={
                <Blurhash
                  hash="L7o;~Xn$}Wj]0#ogtKj[7odV9^NH"
                  width="100%"
                  height="100%"
                  resolutionX={32}
                  resolutionY={32}
                />
              }
            />
          </div>
        </Carousel>
      </div>
    );
  }
  