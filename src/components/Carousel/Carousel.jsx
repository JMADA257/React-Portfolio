import Carousel from "react-bootstrap/Carousel";
import "../Carousel/Carousel.css";
import ShredNStyle from "../../assets/ShredNStyle.png";
import TechBlog from "../../assets/Tech-Blog.png";
import MenuMatch from "../../assets/Menu-Match.png";
import JSQuiz from "../../assets/JSQuiz.png";
import WeatherDashboard from "../../assets/WeatherDashboard.png";
import PasswordGen from "../../assets/PasswordGen.png";

import Globe from "../Globe/Mars";

function CustomCarousel() {
  return (
    <>
      <Carousel
        className="Carousel"
        indicators={false}
        fade={true}
        touch={true}
        interval={3500}
      >
        <Carousel.Item>
          <img src={ShredNStyle} alt="First slide" className="img-fluid" />
          <h2 className="projectDescription">Hello world Im project one!</h2>
          <p>
            {" "}
            className="projectDescription" Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Asperiores consectetur culpa quos
            recusandae ratione ea totam. Minus quae ipsum.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <img src={MenuMatch} alt="Second slide" className="img-fluid" />
          <h2 className="projectDescription">Hello world Im project two!</h2>
          <p className="projectDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consectetur culpa quos recusandae ratione ea totam. Minus quae
            ipsum.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <img src={TechBlog} alt="Third slide" className="img-fluid" />
          <h2 className="projectDescription">Hello world Im project three!</h2>
          <p className="projectDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consectetur culpa quos recusandae ratione ea totam. Minus quae
            ipsum.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <img src={JSQuiz} alt="Fourth slide" className="img-fluid" />
          <h2 className="projectDescription">Hello world Im project four!</h2>
          <p className="projectDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consectetur culpa quos recusandae ratione ea totam. Minus quae
            ipsum.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <img src={WeatherDashboard} alt="Fifth slide" className="img-fluid" />
          <h2 className="projectDescription">Hello world Im project five!</h2>
          <p className="projectDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consectetur culpa quos recusandae ratione ea totam. Minus quae
            ipsum.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <img src={PasswordGen} alt="Sixth slide" className="img-fluid" />
          <h2 className="projectDescription">Hello world Im project six!</h2>
          <p className="projectDescription">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consectetur culpa quos recusandae ratione ea totam. Minus quae
            ipsum.
          </p>
        </Carousel.Item>
      </Carousel>
      <Globe />
    </>
  );
}

export default CustomCarousel;
