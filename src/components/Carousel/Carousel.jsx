import Carousel from "react-bootstrap/Carousel";
import "../Carousel/Carousel.css";
import ShredNStyle from "../../assets/ShredNStyle.png";
import MenuMatch from "../../assets/Menu-Match.png";
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
        <Carousel.Item>
          <a href="https://github.com/jkellogg01/menu-match" target="_blank">
            <img src={MenuMatch} alt="Second slide" className="img-fluid" />
          </a>
          <h2 className="projectDescription">Menu Match</h2>
          <p className="projectDescriptionPara">
            For my initial group project during my course, we developed a
            front-end app aimed at enhancing the dining experience at dinner
            parties. The app provides users with randomly generated drink and
            food recommendations on the home screen. Users can also search for
            drinks and food by ingredient or category. Importantly, when you
            search for a cocktail or food item, the app displays the entire
            recipe with detailed instructions on how to prepare it.
            Additionally, the app features a shopping list functionality,
            allowing users to add ingredients to their list when selecting a
            cocktail or food item. This project was instrumental in deepening
            our understanding of API integration and the proper methods for
            implementing them effectively.
          </p>
        </Carousel.Item>
      </Carousel>
      {/* {planetIndex === 0 && <Mars />} */}
      {/* {planetIndex === 1 && <h2>Mercury</h2>} */}
      {/* {planetIndex === 1 && <Mercury />} */}
      {/* {planetIndex === 2 && <Earth />} */}
      {/* {planetIndex === 2 && <h2>Earth</h2>} */}

      <Mars visible={planetIndex === 0} />
      {/* <Earth visible={planetIndex === 1} />
      <Mercury visible={planetIndex === 2} /> */}
    </>
  );
}

export default CustomCarousel;
