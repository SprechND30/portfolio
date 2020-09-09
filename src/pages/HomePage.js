import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import { Container, Col, Row } from 'react-bootstrap';
import Contact from '../components/Contact';

function HomePage(props) {

  return(
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Container>
        <Row>
          <Col className="border-right">
            <h3 className="display-5 font-weight-light">{props.subTitle}</h3>
            <Carousel />
          </Col>
          <Col xs={3}>
            <Contact />
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default HomePage