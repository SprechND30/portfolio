import React from 'react';

import { Container, Row } from 'react-bootstrap';
import { PlusCircleFill, DashCircleFill } from 'react-bootstrap-icons';

import CardInfo from '../components/CardInfo';

function Card(props) {
  return(
    <div className="d-inline-block s-card" onClick={(e) => props.click(props.item)}>
    
      <Container>
        <Row className="justify-content-start align-items-center">
          <div className=" ">{ props.item.selected ? <DashCircleFill/> : <PlusCircleFill/> }</div>
          <img className="s-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
          <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
        </Row>
      </Container>
      { props.item.selected &&  <p>{props.item.description}</p> }
    </div>
  );
}

export default Card;