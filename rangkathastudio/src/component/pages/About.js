import React from "react";
import "./Style.css"

function About() {
  return (
    <>
      <div className="pbody">
        <section id="portfolioAbout">
          <div className="aboutContainer">
            <div className="row">
              <div className="about-col-1">
                <img src="images/about.jpg" alt="" />
              </div>
              <div className="about-col-2">
                <h1 className="subTitle">About Me</h1>
                <p><br />Aniket Kadlak is an accomplished photographer known for his stunning visuals and ability to capture the essence
                  of his subjects. He was born on September 10th, 1985, in Pune, India. Aniket's passion for photography began at
                  an early age, and he honed his skills by studying at the Maharashtra Institute of Technology. Aniket started
                  working as a professional photographer, specializing in fashion, portraits, and landscapes. His work quickly
                  gained recognition, and he was soon featured in several prestigious publications. Aniket's photography style is
                  unique, and he often experiments with various techniques and styles to create visually stunning images. He is known
                  for his ability to capture the essence of his subjects. Over the years,Aniket has traveled to several countries,
                  capturing the beauty of different cultures and landscapes.<br /><br />

                  Aniket's photography style is unique, and he often experiments with various techniques and styles
                  to create visually stunning images. He is known for his ability to capture the essence of his
                  subjects, whether it be the beauty of a landscape or the personality of a person. Over the years,
                  Aniket has traveled to several countries, capturing the beauty of different cultures and landscapes.
                  His work has taken him to places like Paris, Tokyo, New York, and London, and he has collaborated
                  with several high-profile clients. Apart from his work in the fashion and portrait industry, Aniket
                  is also known for his social work. He has worked with several non-profit organizations, using his
                  photography skills to raise awareness and funds for various causes.</p><br />
                <div className="tab-content">
                  <ul>
                    <li><span>CANDID</span><br />A Photograph Captured Without Creating A Posed Appearance</li>
                    <li><span>PORTRAIT</span><br />a type of photography aimed toward capturing the personality of a person or <br />group of people by using effective lighting, backdrops, and poses.</li>
                    <li><span>LANDSCAPE</span><br />shows the spaces within the world, sometimes vast and unending, but other times microscopic.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default About;