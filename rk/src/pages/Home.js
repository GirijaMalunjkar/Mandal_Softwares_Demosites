import React from "react";
import About from "./About";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Packages from "./Package";

export function Home() {
  return (
    <>
      <section id="portfolioHeader">
        <div className="headerContainer">
          <div className="headerText" style={{ color: "white" }}>
            <h1>
              <span>RANG</span>KATHA
            </h1>
            <p>Photo Studio</p>
          </div>
          <p className="know-more-text">Know More</p>
        </div>
      </section>
      <About id="about" />
      <Services />
      <Packages />
      <Testimonial />
    </>
  );
}
export default Home;
