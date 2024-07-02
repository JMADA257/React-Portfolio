import Carousel from "react-bootstrap/Carousel";
import "../Carousel/Carousel.css";
import ShredNStyle from "../../assets/ShredNStyle.png";
import SuperPups from "../../assets/Super-Pups.png";
import Blurb from "../../assets/Blurb.png";
import Mars from "../Globe/Mars";
import { useState } from "react";

function CustomCarousel() {
  const [planetIndex, setPlanetIndex] = useState(0);

  const onSlideChange = (slideIndex) => {
    setPlanetIndex(slideIndex);
  };

  return (
    <>
      <Carousel
        className="Carousel"
        indicators={false}
        fade={true}
        touch={true}
        interval={8500}
        onSlide={onSlideChange}
      >
        <Carousel.Item>
          <a href="http://www.superpupevents.com/" target="_blank">
            <img src={SuperPups} alt="Second slide" className="img-fluid" />
          </a>
          <h2 className="projectDescription">Super Pup Events</h2>
          <p className="projectDescriptionPara">
            I successfully completed a contracted project for Super Pup Events,
            delivering a fully deployed website integrated with a lightweight
            Content Management System (CMS). Utilizing a full stack MERNG
            (MongoDB, Express.js, React, Node.js, GraphQL) architecture, the
            website features robust functionalities including user login and
            authentication, seamless email integration capabilities, and is
            hosted using MongoDB Atlas and Heroku. This project showcases my
            proficiency in developing scalable web applications with modern
            technologies and implementing essential user management and
            communication features..
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/ljkahn/Blurb" target="_blank">
            <img src={Blurb} alt="Third slide" className="img-fluid" />
          </a>
          <h2 className="projectDescription">Blurb</h2>
          <p className="projectDescriptionPara">
            "Blurb" is a mobile-centric Twitter clone project showcasing my
            expertise in the MERN stack. Developed collaboratively within a
            group, this project replicates key Twitter features, emphasizing a
            mobile-first approach. It demonstrates my proficiency in utilizing
            MongoDB, Express, React, and Node.js to create a real-time,
            user-friendly mobile application, highlighting my ability to work
            effectively as part of a team to deliver a functional and engaging
            product.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/nlad218/ShredNStyle" target="_blank">
            <img src={ShredNStyle} alt="First slide" className="img-fluid" />
          </a>
          <h2 className="projectDescription">SkiNStyle</h2>
          <p className="projectDescriptionPara">
            Our recent group project was the development of a ski and
            snowboarding website. Our primary goal was to enable users to easily
            check weather conditions at various resorts. By selecting a state,
            users can view all the resorts located in that state. We've also
            included a shopping list feature for ski and snowboard equipment and
            apparel. Additionally, users can create accounts, receiving a
            welcome email upon sign-up, and place orders. Throughout this
            project, we gained valuable experience in both front-end and
            back-end development, including working with two dedicated
            databases. Feel free to explore the website and see our work in
            action!
          </p>
        </Carousel.Item>
      </Carousel>
      <Mars visible={planetIndex === 0} />
    </>
  );
}

export default CustomCarousel;
