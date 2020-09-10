import React from 'react';

import Card from '../components/Card';

import giveTree from '../assets/images/giveTree.png'
import wsaj from '../assets/images/wsaj.png'
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
          title: 'Giving Tree Web Application',
          subTitle: 'Senior Project',
          imgSrc: giveTree,
          link: 'https://givingtree-cfs.firebaseapp.com/',
          linkText: "View Project Demo",
          description: "Over the course of my year-long senior project, my team and I designed, developed, and tested a web platform through which charitable nonprofit foundations can market giving opportunities and collect donations from demographics that they otherwise find hard to reach. During the design phase, my work included meeting with the client to collect technical specifications, wireframe design, mock-up testing with target users, and UI design. During development, I implemented the tagging system, tag and keyword search, and worked with a teammate to integrate the larger search bar. In addition, I worked on the nonprofit side of the website, and set up component testing, running numerous unit-tests with Enzyme and Jest. Check out the project with sample data above!",
          selected: false
        },
        {
          id: 1,
          title: 'Detecting Erroneous Node Attributes with GNNs',
          subTitle: 'Smart Environments REU at WSU',
          imgSrc: graph,
          link: 'https://github.com/SprechND30/GraphSAGE_Benchmark',
          linkText: "View Project GitHub",
          description: "Over the summer of 2019, I had the opportunity to participate in WSU's Smart Environments REU. My project focused on providing a baseline for a graduate student who was investigating the use of Graph Neural Nets (GNNs) for detecting erroneous node attributes in directed graphs. My job was to provide a baseline, by implementing and testing GraphSAGE, a modern deep learning algorithm, to node2vec, a simpler alternative. The link will take you to the Github repo for the project, containing the algorithms, preprocessing code, instructions, and some results.",
          selected: false
        },
        {
          id: 2,
          title: 'Ant Tracking Data Preprocessing',
          subTitle: 'Computer Vision Independent Research',
          imgSrc: ant,
          link: 'https://github.com/SprechND30/ant_tracking',
          linkText: "View Project GitHub",
          description: "The purpose of this project was to evaluate various computer vision algorithms for the purpose of tracking ants. Over the course of the project, I tested several algorithms, and presented our results at the Sigma Xi Undergraduate Research Conference in the spring of 2019. The Github linked above contains my work from last year: data preprocessing code and instructions for how to run CFNets, a deep learning algorithm.",
          selected: false
        },
        {
          id: 3,
          title: 'WSAJ Website',
          subTitle: 'Web Programming Group Project',
          imgSrc: wsaj,
          link: 'https://wsaj-7626d.firebaseapp.com/',
          linkText: "View Project Demo",
          description: "In this project, my team and I created a website with ReactJS for my Alma Mater's student-run radio station, WSAJ. The site includes a home page with news updates, a list of the DJ shows and their upcoming sets, a calendar (which is interactive from the producers' prospectives and a contact page. You can see the site above, populated with sample data.",
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
      return <Row><Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} /></Row>
    })
  }

  render() {
    return(
      <Container>

          {this.makeItems(this.state.items)}

      </Container>
    );
  }

}

export default Carousel;