import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/testimonial.css"

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      // imgSrc: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg',
      name: 'Paras B',
      content: 'Highly recommend !! I just received my pregnancy photos from rang katha studio and I am beyond happy with how they turned out .He was extremely professional and made my husband and I feel very comfortable. I cant wait to return for my newton photos once baby arrives!!',
    },
    {
      // imgSrc: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg',
      name: 'Akshay G',
      content: 'Aniket is the photographer I’ve been searching for. He is warm, open-minded, creative, and very skilled at capturing beautiful images. I was very comfortable sharing my ideals with him and my photo session was a fun experience that remains a fond memory.thank you so much',
    },
    {
      // imgSrc: 'https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg',
      name: 'Ravan Y',
      content: 'Aniket is so welcoming and a true artist. He has captured some of those most precious times in my life and I truly cherish photos from our maternity and newborn shoot. I can’t recommend Aniket enough!',
    },
    // Add more testimonial objects as needed
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="t_container">
      
      <div className="inner">
        <h1>Testimonials</h1>
        <div className="border"></div>
        </div>

      <section id="testim" className="testim">
        <div className="testim-cover">
          <div className="wrap">
            <span id="right-arrow" className="arrow right" onClick={handleNext}>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
            <span id="left-arrow" className="arrow left" onClick={handlePrev}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
            <ul id="testim-dots" className="dots">
              {testimonials.map((_, index) => (
                <li key={index} className={`dot ${index === activeIndex ? 'active' : ''}`}></li>
              ))}
            </ul>
            <div id="testim-content" className="cont">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`testimonial4_slide ${index === activeIndex ? 'active' : ''}`}>
                  {/* <div className="img">
                    <img src={testimonial.imgSrc} alt={testimonial.name} />
                  </div> */}
                  <h2>{testimonial.name}</h2>
                  <p>{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSlider;
