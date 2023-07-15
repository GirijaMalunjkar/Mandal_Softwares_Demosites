import React from 'react';
import '../assets/css/socialmedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Social() {
  return (
    <div>
      <div className="Social-media">
        <a href="#"><FontAwesomeIcon icon={faFacebook} color="white" /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} color="white" /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} color="white" /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} color="white" /></a>
      </div>
    </div>
  );
}

export default Social;
