import React from "react";
import "../assets/css/about.css";
import Social from "./Socialmedia";

const DigitalUpgrade = () => {
  return (
    <div className="we-are-block">
      <div id="about-us-section">
        <div className="about-us-image">
          <img
            src={require("../assets/img/about-1.png")}
            width="808"
            height="458"
            alt="About-1"
          />
        </div>
        <div className="about-us-info">
          <div className="tab-content">
            <h2>About Me</h2>

            <p>
              We are specialised in newborn kids family shoot and maternity
              shoot open travelling to destination to capture the perfect
              moments from perfect time and place. We guarantee to be there for
              your every special moment to be capture for all the time. To us
              photography is to capture emotions and special movements to
              remember forever. This can be said as part of story that matters
              most : real story,real peoples,real moments.
            </p>
          </div>
          <a href="#" title="About Us Button">
            ABOUT US
          </a>
        </div>
      </div>
      <div id="history-section">
        <div className="history-image">
          <img
            src={require("../assets/img/about-2.png")}
            width="951"
            height="471"
            alt="About-2"
          />
        </div>
        <div className="history-info">
          <h2>Preserving Local History</h2>
          <p>
            Aniket Kadlak, the visionary founder of Rangkatha Photo Studio,
            embarked on his creative journey in 2018, blending his passion for
            storytelling and photography to capture timeless moments that unfold
            vibrant narratives.
          </p>
          <div className="socialmedia">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalUpgrade;
