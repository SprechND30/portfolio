import React from 'react';

import Card from '../components/Card';

import giveTree from '../assets/images/giveTree.png'
import proj2 from '../assets/images/proj2.png'
import ant from '../assets/images/ant.png'
import graph from '../assets/images/graph.png'
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Giving Tree',
          subTitle: 'Senior Project',
          imgSrc: giveTree,
          link: 'https://givingtree-cfs.firebaseapp.com/',
          description: "Giving Tree was my senior group project. Over the course of my year-long senior project, my team and I designed, developed, and tested a web platform through which charitable nonprot foundations can market giving opportunities and collect donations from demographics that they otherwise find hard to reach. Check out the project with sample data below!",
          selected: false
        },
        {
          id: 1,
          title: 'WSAJ',
          subTitle: 'Web Programming Group Project',
          imgSrc: proj2,
          link: 'https://wsaj-7626d.firebaseapp.com/',
          description: "In this project, my team and I created a website with ReactJS for our Alma Mater's student-run radio station, WSAJ. You can see the site below, populated with sample data.",
          selected: false
        },
        {
          id: 2,
          title: 'Ant Tracking Data Preprocessing',
          subTitle: 'Computer Vision Independent Research',
          imgSrc: ant,
          link: 'https://github.com/SprechND30/ant_tracking',
          description: "The purpose of this project was to evaluate various computer vision algorithms for the purpose of tracking ants. The Github linked below contains data preprocessing code and instructions for how to run CFNets, a deep learning algorithm.",
          selected: false
        },
        {
          id: 3,
          title: 'BLAH',
          subTitle: 'Computer Vision Independent Research',
          imgSrc: graph,
          link: 'https://github.com/SprechND30/GraphSAGE_Benchmark',
          description: "blah blah.",
          selected: false
        }
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id){
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render() {
    return(
      <Container>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }

}

export default Carousel;