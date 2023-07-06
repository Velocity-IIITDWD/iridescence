import React, { useRef, useState, useEffect } from 'react';
import { event_blog_data } from './event_blog_data';
import { ImCross } from 'react-icons/im';
import { BiRightArrowCircle, BiLeftArrowCircle } from 'react-icons/bi';
import '../styles/event_blog.css';
import Footer from './Footer';

function Cards() {
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const eventDetailRef = useRef([]);

  const handleContainerClick = (index) => {
    setSelectedEventIndex(index);
    disableScroll(); // Call function to disable scroll when event detail opens
  };

  const handleCrossButtonClick = () => {
    setSelectedEventIndex(null);
    enableScroll(); // Call function to enable scroll when event detail closes
  };

  const handleClickOutside = (event) => {
    if (
      event.target.closest('.eventDetail') === null &&
      event.target.closest('.eventContainer') === null
    ) {
      setSelectedEventIndex(null);
      enableScroll(); // Call function to enable scroll when event detail closes
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % event_blog_data[selectedEventIndex].image.length;
      return nextIndex;
    });
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex =
        (prevIndex - 1 + event_blog_data[selectedEventIndex].image.length) %
        event_blog_data[selectedEventIndex].image.length;
      return nextIndex;
    });
  };

  function fade() {
    var fadeElems = document.querySelectorAll('.eventContainer');
    for (var i = 0; i < fadeElems.length; i++) {
      var elem = fadeElems[i];
      var bounding = elem.getBoundingClientRect();
      if (bounding.top < window.innerHeight && bounding.bottom > 0) {
        elem.classList.add('is-visible');
      }
    }
  }

  function fade2() {
    var fadeElems = document.querySelectorAll('.container h1');
    for (var i = 0; i < fadeElems.length; i++) {
      var elem = fadeElems[i];
      var bounding = elem.getBoundingClientRect();
      if (bounding.top < window.innerHeight && bounding.bottom > 0) {
        elem.classList.add('is-visible');
      }
    }
  }

  useEffect(() => {
    fade();
    fade2();

    window.addEventListener('scroll', fade);
    window.addEventListener('click', fade);

    return () => {
      window.removeEventListener('scroll', fade);
      window.removeEventListener('click', fade);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className={`eventList ${selectedEventIndex !== null ? 'blur' : ''}`}>
        {event_blog_data.map((event, index) => (
          <div className='detailsAndDemo' key={index}>
            <div
              className={`eventContainer ${selectedEventIndex === index ? 'active' : ''}`}
              onClick={() => handleContainerClick(index)}
              style={{ backgroundImage: `url(${event.image[0]})` }}
            >
              <div className='eventCardCaption'>
                {event.caption}
                <br />
                <span className='clickToRead'>Click to read more.....</span>
              </div>
            </div>
            
            <div
              className={`eventDetail ${selectedEventIndex === index ? 'active' : ''}`}
              ref={(el) => (eventDetailRef.current[index] = el)}
            >
              <div className='crossButton' onClick={handleCrossButtonClick}>
                <ImCross style={{ width: '1.5rem', height: '1.5rem' }} />
              </div>
              <div className='detailImageContainer'>
                <div className='icon' onClick={handlePreviousImage}>
                  <BiLeftArrowCircle style={{ width: '3rem', height: '3rem' }} />
                </div>
                <div className='multipleImageContainer'>
                  {event.image.map((image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt='not available'
                      style={{ display: imageIndex === currentImageIndex ? 'block' : 'none' }}
                    />
                  ))}
                </div>
                <div className='icon' onClick={handleNextImage}>
                  <BiRightArrowCircle style={{ width: '3rem', height: '3rem' }} />
                </div>
              </div>
              <div className='detailTextContainer'>
                {event.caption}
                <hr />
                {event.event_caption}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Cards;
