import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import "../assets/css/services.css"

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
                  <FontAwesomeIcon icon={faPenRuler} />
                </div>
              </div>
              <div className="card__content">
                <h3>Design</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          {/* SERVICE CARD 2 */}
          <div className="card__bx card__2">
            <div className="card__data">
              <div className="card__icon">
                <div className="card__icon-bx">
                  <FontAwesomeIcon icon={faCode} />
                </div>
              </div>
              <div className="card__content">
                <h3>Development</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          {/* SERVICE CARD 3 */}
          <div className="card__bx card__3">
            <div className="card__data">
              <div className="card__icon">
                <div className="card__icon-bx">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
              </div>
              <div className="card__content">
                <h3>Launch</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

          {/* SERVICE CARD 4 */}
          <div className="card__bx card__4">
            <div className="card__data">
              <div className="card__icon">
                <div className="card__icon-bx">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
              </div>
              <div className="card__content">
                <h3>Launch</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>

        </section>
      
    </section>
  );
};

export default ServiceSection;
