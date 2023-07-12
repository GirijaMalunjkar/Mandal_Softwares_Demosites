import React from 'react';
import '../assets/css/about.css';
import Social from "./Socialmedia";

const DigitalUpgrade = () => {
  return (
    <div className="we-are-block">
      <div id="about-us-section">
        <div className="about-us-image">
          <img src={require('../assets/img/about-1.png')} width="808" height="458" alt="About-1" />
        </div>
        <div className="about-us-info">
        <div className="tab-content">
                  <ul>
                    <li><span>CANDID</span><br />A Photograph Captured Without Creating A Posed Appearance</li>
                    <li><span>PORTRAIT</span><br />a type of photography aimed toward capturing the personality of a person or <br />group of people by using effective lighting, backdrops, and poses.</li>
                    <li><span>LANDSCAPE</span><br />shows the spaces within the world, sometimes vast and unending, but other times microscopic.</li>
                  </ul>
                </div>
          <a href="#" title="About Us Button">ABOUT US</a>
        </div>
      </div>
      <div id="history-section">
        <div className="history-image">
          <img src={require('../assets/img/about-1.png')} width="951" height="471" alt="About-2" />
        </div>
        <div className="history-info">
          <h2>Preserving Local History</h2>
          <p>
          Aniket Kadlak, the visionary founder of Rangkatha Photo Studio, embarked on his creative journey in 2018, blending his passion for storytelling and photography to capture timeless moments that unfold vibrant narratives.
          </p>
          {/* <a href="#" title="History Button">HISTORY</a> */}
          <div>
      <Social/>
    </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalUpgrade;
