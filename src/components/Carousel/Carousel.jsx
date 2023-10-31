import Carousel from "react-bootstrap/Carousel";
import "../Carousel/Carousel.css";
import ShredNStyle from "../../assets/ShredNStyle.png";
import TechBlog from "../../assets/Tech-Blog.png";
import MenuMatch from "../../assets/Menu-Match.png";
import JSQuiz from "../../assets/JSQuiz.png";
import WeatherDashboard from "../../assets/WeatherDashboard.png";
import PasswordGen from "../../assets/PasswordGen.png";
import Mars from "../Globe/Mars";
import Mercury from "../Globe/Mercury";
import Earth from "../Globe/Globe";
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
          <p className="projectDescription">
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
        <Carousel.Item>
          <a href="https://github.com/JMADA257/Tech-Blog" target="_blank">
            <img src={TechBlog} alt="Third slide" className="img-fluid" />
          </a>
          <h2 className="projectDescription">Tech Blog </h2>
          <p className="projectDescription">
            This project represents a significant milestone in my development
            journey, as I designed and created it independently. The tech blog I
            developed provides users with the capability to sign in, express
            their thoughts, and share them on a dedicated forum. Through this
            experience, I delved deeper into the mechanics of user
            authentication and login systems, refining my skills in this
            critical aspect of web development. Notably, this solo endeavor not
            only enhanced my technical prowess but also bolstered my confidence
            as a developer. It underscored my ability to take on complex tasks
            and complete them successfully. The project's success served as a
            testament to my growth and proficiency as a solo developer, a
            milestone that I am proud to share with others.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/JMADA257/JS-Quiz" target="_blank">
            <img src={JSQuiz} alt="Fourth slide" className="img-fluid" />
          </a>
          <h2 className="projectDescription">JSQuiz</h2>
          <p className="projectDescription">
            This personal project, constructed entirely by me from the ground
            up, was a valuable learning experience. It taught me how to set
            timers and deliver quizzes to users, focusing predominantly on
            JavaScript logic. To add a touch of humor and camaraderie, I
            included a few joke questions for the classmates I journeyed through
            school with. While it posed several challenges, I am proud to say
            that I persevered and successfully completed this project, gaining
            important skills in the process.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <a
            href="https://github.com/lillianedwards/Weather-Dashboard"
            target="_blank"
          >
            <img
              src={WeatherDashboard}
              alt="Fifth slide"
              className="img-fluid"
            />
          </a>
          <h2 className="projectDescription">Weather Dashboard</h2>
          <p className="projectDescription">
            This project marked my initial collaboration with a team from Menu
            Match, serving as an invaluable learning experience for navigating
            GitHub merge conflict errors. It deepened my understanding of how
            GitHub functions in a group setting and the strategic choices one
            can make to prevent conflicts from arising. Additionally, this
            endeavor broadened my knowledge of API calls and significantly
            enhanced my proficiency in working with local storage. The project
            itself is a fully functional weather app that simplifies the process
            of checking the weather. Users need only input a city name, and the
            app displays the current day's weather as well as forecasts for the
            next seven days. It also efficiently stores these city references in
            local storage, allowing for easy access to past searches.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://github.com/JMADA257/Password-Gen" target="_blank">
            <img src={PasswordGen} alt="Sixth slide" className="img-fluid" />
          </a>
          <h2 className="projectDescription">Password Generator</h2>
          <p className="projectDescription">
            This private project was developed to empower users in creating
            customized passwords tailored to their preferences. By incorporating
            user input, including factors like special characters and uppercase
            letters, the password generator produces unique and secure
            passwords. In the process of building this project, I gained
            valuable insights into working with alerts and extracting user
            information. This experience laid the foundation for my ongoing
            development journey, equipping me with essential skills in user
            interaction and data handling.
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
