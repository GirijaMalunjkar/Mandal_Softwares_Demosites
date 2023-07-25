import React from "react";
import "../assets/css/package.css"; // Assuming you have styles.css in the same folder as PackageSection.js

const PackageSection = () => {
  return (
    <section className="choose-package">
      <div className="pkgContainer">
        <div className="inner">
          <h1>Packages</h1>
          <div className="border"></div>
        </div>

        <div className="divider-45 d-none d-lg-block"></div>
        <div className="pkgCards c-gutter-60">
          <div className="pkgcard">
            <div className="pricing-plan hero-bg rounded">
              <div className="plan-name text-uppercase bg-maincolor">
                <h3>Bronze</h3>
              </div>
              <div className="plan-features">
                <ul className="list-bordered">
                  <li>Normal Photo Shoot </li>
                  <li>Including props </li>
                  <li>10 Retouched digital images</li>
                </ul>
              </div>
              <div className="price-wrap d-flex">
                <span className="plan-sign small-text">Rs</span>
                <span className="plan-price color-main2">6000</span>
                <span className="plan-decimals small-text">/shoot</span>
              </div>
              <div className="plan-button">
                <a
                  href="#"
                  className="btn btn-maincolor"
                  style={{ padding: "20px" }}
                >
                  <span>Book Now</span>
                </a>
              </div>
            </div>
            <div className="divider-45 d-block d-lg-none"></div>
          </div>
          <div className="divider-20 d-block d-md-none"></div>
          <div className="pkgcard">
            <div className="pricing-plan hero-bg rounded">
              <div className="plan-name text-uppercase bg-maincolor">
                <h3>Silver Package</h3>
              </div>
              <div className="plan-features">
                <ul className="list-bordered">
                  <li>
                    15 Retouched digital images.
                    <br /> (5 x 7 Print)
                  </li>
                  <li>2 theme set up for baby.</li>
                  <li>1 background for family shots</li>
                  <li>1 to 1.5 hour session.</li>
                  <li>parents and siblings included.</li>
                  <li>Makeup Artist for parents</li>
                  <li>(8 x 12) Frame</li>
                </ul>
              </div>
              <div className="price-wrap d-flex">
                <span className="plan-sign small-text">Rs</span>
                <span className="plan-price color-main2">13,000</span>
                <span className="plan-decimals small-text">/shoot</span>
              </div>
              <div className="plan-button">
                <a
                  href="#"
                  className="btn btn-maincolor"
                  style={{ padding: "20px" }}
                >
                  <span>Book Now</span>
                </a>
              </div>
            </div>
            <div className="divider-45 d-block d-lg-none"></div>
          </div>
          <div className="divider-20 d-block d-md-none"></div>
          <div className="pkgcard">
            <div className="pricing-plan hero-bg rounded">
              <div className="plan-name text-uppercase bg-maincolor">
                <h3>Gold Package</h3>
              </div>
              <div className="plan-features">
                <ul className="list-bordered">
                  <li>20 Retouched digital images.</li>
                  <li>3 theme set up for baby. </li>
                  <li>1 background for family shots</li>
                  <li>2 hour session.</li>
                  <li>Indoor + Outdoor photo session </li>
                  <li>parents and siblings included.</li>
                  <li>Makeup Artist for parents</li>
                  <li>Dream Book Album</li>
                  <li>Sparkle Frame </li>
                </ul>
              </div>
              <div className="price-wrap d-flex">
                <span className="plan-sign small-text">Rs</span>
                <span className="plan-price color-main2">18,000</span>
                <span className="plan-decimals small-text">/shoot</span>
              </div>
              <div className="plan-button">
                <a
                  href="#"
                  className="btn btn-maincolor"
                  style={{ padding: "20px" }}
                >
                  <span>Book Now</span>
                </a>
              </div>
            </div>
            <div className="divider-45 d-block d-lg-none"></div>
          </div>
          <div className="divider-20 d-block d-md-none"></div>
          <div className="pkgcard">
            <div className="pricing-plan hero-bg rounded">
              <div className="plan-name text-uppercase bg-maincolor">
                <h3>Diamond Package</h3>
              </div>
              <div className="plan-features">
                <ul className="list-bordered">
                  <li>cake smash + theme + family</li>
                  <li>
                    30 Retouched digital images
                    <br />
                    (10 from cake smash+15
                    <br /> from theme and family).
                  </li>
                  <li>
                    1 cake smash + 2 others <br />
                    set ups for baby.
                  </li>
                  <li>1 background for family shots</li>
                  <li>2 hour session.</li>
                  <li>parents and siblings included.</li>
                  <li>Makeup Artist for parents</li>
                  <li>12 x 18 photo book</li>
                  <li> Wooden frame</li>
                </ul>
              </div>
              <div className="price-wrap d-flex">
                <span className="plan-sign small-text">Rs</span>
                <span className="plan-price color-main2">6000</span>
                <span className="plan-decimals small-text">/shoot</span>
              </div>
              <div className="plan-button">
                <a
                  href="#"
                  className="btn btn-maincolor"
                  style={{ padding: "20px" }}
                >
                  <span>Book Now</span>
                </a>
              </div>
            </div>
            <div className="divider-45 d-block d-lg-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
