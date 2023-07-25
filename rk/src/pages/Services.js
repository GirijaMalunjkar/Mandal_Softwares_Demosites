import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBabyCarriage,
  faBaby,
  faRing,
  faHeart,
  faPortrait,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/services.css";

const ServiceSection = () => {
  return (
    <section className="s_container">
      <div className="inner">
        <h1>Services</h1>
        <div className="border"></div>
      </div>
      <section className="card__container">
        {/* SERVICE CARD 1 */}
        <div className="card__bx card__1">
          <div className="card__data">
            <div className="card__icon">
              <div className="card__icon-bx">
                <FontAwesomeIcon icon={faPortrait} />
              </div>
            </div>
            <div className="card__content">
              <h3>PORTRAIT</h3>
              <p>
                Discover the art of you through our captivating portrait
                photoshoots.
              </p>
              <Link to="./Portrait">Read More</Link>
            </div>
          </div>
        </div>

        {/* SERVICE CARD 2 */}
        <div className="card__bx card__2">
          <div className="card__data">
            <div className="card__icon">
              <div className="card__icon-bx">
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
            <div className="card__content">
              <h3>PRE-WEDDINGS</h3>
              <p>
                Cherish the moments before the 'I do' with our enchanting
                pre-wedding photography.
              </p>
              <Link to="./Prewedding">Read More</Link>
            </div>
          </div>
        </div>

        {/* SERVICE CARD 3 */}
        <div className="card__bx card__3">
          <div className="card__data">
            <div className="card__icon">
              <div className="card__icon-bx">
                <FontAwesomeIcon icon={faRing} />
              </div>
            </div>
            <div className="card__content">
              <h3>WEDDINGS</h3>
              <p>
                Capture the timeless love story of your special day with our
                exquisite wedding photography.
              </p>
              <Link to="./Wedding">Read More</Link>
            </div>
          </div>
        </div>

        {/* SERVICE CARD 4 */}
        <div className="card__bx card__4">
          <div className="card__data">
            <div className="card__icon">
              <div className="card__icon-bx">
                <FontAwesomeIcon icon={faBaby} />
              </div>
            </div>
            <div className="card__content">
              <h3>MATERNITY</h3>
              <p>
                Embrace the beauty of motherhood with our tender and timeless
                maternity photoshoots.
              </p>
              <Link to="./Maternity">Read More</Link>
            </div>
          </div>
        </div>

        {/* SERVICE CARD 5 */}
        <div className="card__bx card__5">
          <div className="card__data">
            <div className="card__icon">
              <div className="card__icon-bx">
                <FontAwesomeIcon icon={faBabyCarriage} />
              </div>
            </div>
            <div className="card__content">
              <h3>BABY SHOOT</h3>
              <p>
                Celebrate the joy of new beginnings with our heartwarming baby
                photoshoots.
              </p>
              <Link to="./Babyshoot">Read More</Link>
            </div>
          </div>
        </div>

        {/* SERVICE CARD 6 */}
        <div className="card__bx card__6">
          <div className="card__data">
            <div className="card__icon">
              <div className="card__icon-bx">
                <FontAwesomeIcon icon={faPhone} />
              </div>
            </div>
            <div className="card__content">
              <h3>Contact US</h3>
              <p>+91 ************ </p>
              {/* <Link to="./">Read More</Link> */}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServiceSection;
