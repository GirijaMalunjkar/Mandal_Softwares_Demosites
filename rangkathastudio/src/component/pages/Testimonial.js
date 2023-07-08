import React from "react";
import "./Style.css"

function Testimonial() {
  return (
    <div>
      <div className="testimonials">
        <div className="inner">
          <h1>Testimonials</h1>
          <div className="border"></div>

          <div className="testirow">
            <div className="testicol">
              <div className="testimonial">
                <div className="name"> Paras B</div>
                <p>"Highly recommend !! I just received my pregnancy photos from rang katha studio and I am beyond happy with how they turned out .He was extremely professional and made my husband and I feel very comfortable .I can't wait to return for my newton photos once baby arrives!!"</p>
              </div>
            </div>

            <div className="testicol">
              <div className="testimonial">
                <div className="name">Akshay G</div>
                <p>"Aniket is the photographer I’ve been searching for. He is warm, open-minded, creative, and very skilled at capturing beautiful images. I was very comfortable sharing my ideals with him and my photo session was a fun experience that remains a fond memory.thank you so much 🥰 "</p>
              </div>
            </div>

            <div className="testicol">
              <div className="testimonial">
                <div className="name">Ravan Y</div>
                <p>"Aniket is so welcoming and a true artist. He has captured some of those most precious times in my life and I truly cherish photos from our maternity and newborn shoot. I can’t recommend Aniket enough!"</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;