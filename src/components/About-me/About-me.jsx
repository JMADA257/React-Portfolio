import React from "react";
import "../About-me/About-me.css";
import Globe from "../Globe/Globe";
import portait from "../../assets/Portrait.jpg";

function AboutMe() {
  return (
    <>
      <div className="about">
        <img
          src={portait}
          alt="A photo of myself in the Marines"
          className="aboutPhoto"
        />

        <section className="aboutText">
          <h1 className="aboutH1">Jordan Adams</h1>
          <h2 className="aboutH2">About me! </h2>
          <article className="aboutSection">
            Welcome to my professional portfolio! I'm Jordan Adams, originally
            from Delaware and currently residing in Denver. I'm an aspiring
            full-stack developer with a strong interest in three.js, 3D
            modeling, back-end development, and a passion for space exploration.
            With a three-year tenure as a tank operator in the United States
            Marine Corps, I bring discipline and determination to my work.
            Post-military service, I've gained diverse experience, including car
            mechanics, hospitality service, and, most recently, leading the bar
            at a multi-million-dollar restaurant. Below, you'll find a 3D model
            of the Earth with a red dot marking my current location in Denver.
            I'm excited to connect with you. Please explore my website, and feel
            free to reach out if you'd like to discuss potential opportunities.
            Thank you for visiting!
          </article>
        </section>
      </div>
      <Globe />
    </>
  );
}

export default AboutMe;
