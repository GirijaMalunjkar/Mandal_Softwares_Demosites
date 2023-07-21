import React from "react";
import About from "./About";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Packages from "./Package";
import ContactForm from "./Contact";

export function Home() {
    return (
        <>
            <section id="portfolioHeader">
                <div className="headerContainer">
                    <div className="headerText" style={{ color: "white" }}>
                        <p>Photographer</p>
                        <h1><span>RANG</span>KATHA</h1>
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Packages />
            <Testimonial />
            {/* <ContactForm /> */}
        </>
    )
}
export default Home;