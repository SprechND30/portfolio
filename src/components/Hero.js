import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Hero(props) {

  return(
    <Jumbotron className="jumbotron-fluid p-0" >
      <Container className="jumbo" fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={10} sm={12}>
            { props.title && <h1 className="display-2 font-weight-normal">{props.title}</h1> }
            
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;