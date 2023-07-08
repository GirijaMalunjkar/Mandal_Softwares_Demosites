import React from "react";
import About from "./About";
import Testimonial from "./Testimonial";
import ContactForm from "./Contact";
import "./Style.css"

export function Clients() {
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
            <Testimonial />
            <ContactForm />
        </>
    )
}
export default Clients;