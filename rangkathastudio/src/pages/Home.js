import React from "react";
import About from "./About";
import Services from "./Services";
import Testimonial from "./Testimonial";
import ContactForm from "./Contact";

export function Home() {
    return (
        <>
            <section id="portfolioHeader">
                <div className="headerContainer">
                    <div className="headerText" style={{ color: "white" }}>
                        <p>Photographer</p>
                        <h1>Hi, I'm <span>Aniket Kadlak</span><br />From India, Maharashtra</h1>
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Testimonial />
            <ContactForm />
        </>
    )
}
export default Home;