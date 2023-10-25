import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Background from "./components/Background/Background";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Background />
      <nav>
        <Navbar />
      </nav>
      <Container>
        <Row>
          <Col md={12}>
            <Carousel />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
