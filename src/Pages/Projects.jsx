import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Projects() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Carousel />
        </Col>
      </Row>
    </Container>
  );
}
