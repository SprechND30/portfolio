import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

  return(
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            { props.title && <h1 className="display-2 font-weight-normal">{props.title}</h1> }
            { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
            
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;