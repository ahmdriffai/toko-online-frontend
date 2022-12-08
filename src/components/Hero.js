import React from 'react';
import Slider from 'react-slick';
import { Container, Row, Col } from 'react-bootstrap';

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };
  return (
    <Container className="hero mt-4">
      <Slider {...settings}>
        <Row>
          <Col className="text-center">
            <h1>Software House Wonosobo</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <h1>Semua tentang TCD</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
        </Row>
      </Slider>
    </Container>
  );
}

export default Hero;
