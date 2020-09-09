import React, { useState } from 'react';

import { Container, Row } from 'react-bootstrap';
import { PlusCircleFill, DashCircleFill } from 'react-bootstrap-icons';

import CardInfo from '../components/CardInfo';

function Card(props) {

  const [isOver, setIsOver] = useState(false);

  return(
    <div className={`d-inline-block s-card ${isOver ? "s-card-highlight" : "s-card-normal"}`} onClick={(e) => props.click(props.item)} onMouseEnter={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)}>
    
      <Container>
        
        <Row className="justify-content-start align-items-center">
          
          <img className="s-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
          <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} linkText={props.item.linkText} />
        </Row>
        { props.item.selected &&  <p>{props.item.description}</p> }
      </Container>
      
    </div>
  );
}

export default Card;