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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptas molestias porro in numquam provident, voluptatem illo culpa
            aut atque laborum repellendus nulla suscipit maiores ut voluptates
            alias nesciunt minima? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati nesciunt incidunt culpa rem laudantium
            quod similique ducimus, voluptatibus molestias explicabo possimus
            quasi, magnam aliquid ratione sunt excepturi, repellendus officiis?
            Placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tempore tempora asperiores consectetur assumenda quae, commodi
            placeat ratione sit quasi ex alias corrupti quas vitae nam, eos
            libero distinctio magnam similique?
          </article>
        </section>
      </div>
      <Globe />
    </>
  );
}

export default AboutMe;
