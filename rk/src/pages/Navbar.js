import { Link } from "react-router-dom";
import React from "react";
import "../assets/css/nav.css";
import $ from "jquery";

export default function Navbar() {
  // Handle dropdown toggle
  const handleDropdownToggle = (e) => {
    $(e.target).siblings(".nav-dropdown").toggle();
    $(".nav-dropdown").not($(e.target).siblings()).hide();
    e.stopPropagation();
  };

  // Handle navigation toggle
  const handleNavToggle = () => {
    $("nav ul").slideToggle();
    $("#nav-toggle").toggleClass("active");
  };

  // Hide dropdown on click outside
  const handleOutsideClick = () => {
    $(".nav-dropdown").hide();
  };

  return (
    <>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <Link to="./">
              <img
                className="site-logo"
                src={require("../assets/images/logos/Rangkatha1.webp")}
                alt="Rangkatha1.webp"
              />
            </Link>
          </div>
          <nav>
            <div className="nav-mobile">
              <Link id="nav-toggle" to="#!" onClick={handleNavToggle}>
                <span></span>
              </Link>
            </div>
            <ul className="nav-list">
              <li>
                <Link to="./">HOME</Link>
              </li>
              <li>
                <Link to="./about">ABOUT US</Link>
              </li>
              <li>
                <Link to="#" onClick={handleDropdownToggle}>
                  SERVICES
                </Link>
                <ul className="nav-dropdown">
                  <li>
                    <Link to="./Portrait">PORTRAITS</Link>
                  </li>
                  <li>
                    <Link to="./Prewedding">PRE WEDDINGS</Link>
                  </li>
                  <li>
                    <Link to="./Wedding">WEDDINGS</Link>
                  </li>
                  <li>
                    <Link to="./Maternity">MATERNITY</Link>
                  </li>
                  <li>
                    <Link to="./Babyshoot">BABY SHOOT</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="./Testimonial">TESTIMONIALS</Link>
              </li>
              <li>
                <Link to="./Contact">
                  <button className="button-34" role="button">
                    Registration
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {/* 
            <article>
                <h2>Navigation</h2>
                <p>Responsive Dropdown Navigation Bar.</p>
                <p>
                    Want to see how it's made?{' '}
                    <a href="http://www.taniarascia.com/responsive-dropdown-navigation-bar/">Read the tutorial!</a>
                </p>
            </article> */}
    </>
  );
}
