import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";
import ShredNStyle from "../assets/ShredNStyle.png";
import TechBlog from "../assets/Tech-Blog.png";
import MenuMatch from "../assets/Menu-Match.png";
// import JSQuiz from "../assets/Menu-Match.png";
// import WeatherDashboard from "../assets/Menu-Match.png";

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={ShredNStyle} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={MenuMatch} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={TechBlog} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
