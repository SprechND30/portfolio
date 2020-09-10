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
          linkText: "Project Demo",
          description: "Over the course of my year-long senior project, my team and I designed, developed, and tested a web platform through which charitable nonprofit foundations can market giving opportunities and collect donations from demographics that they otherwise find hard to reach. During the design phase, my work included meeting with the client to collect technical specifications, wireframe design, mock-up testing with target users, and UI design. During development, I implemented the tagging system, tag and keyword search, and worked with a teammate to integrate the larger search bar. I also developed components for the nonprofit and administration sides of the website. Additionally, I set up component testing, running numerous unit-tests with Enzyme and Jest. Check out the project with sample data above!",
          selected: false
        },
        {
          id: 1,
          title: 'Detecting Erroneous Node Attributes with GNNs',
          subTitle: 'Smart Environments REU at WSU',
          imgSrc: graph,
          link: 'https://github.com/SprechND30/GraphSAGE_Benchmark',
          linkText: "Project GitHub",
          description: "Over the summer of 2019, I had the opportunity to participate in WSU's Smart Environments REU. My project focused on working with a graduate student who was investigating the use of Graph Neural Nets (GNNs) for detecting erroneous node attributes in directed, attributed graphs. My role was to provide a baseline, by implementing and testing GraphSAGE, a modern deep learning algorithm, and comparing it to node2vec, a simpler alternative. The link will take you to the Github repository for the project, containing the algorithms, preprocessing code, instructions, and some results.",
          selected: false
        },
        {
          id: 2,
          title: 'Ant Tracking with Computer Vision',
          subTitle: 'Independent Research',
          imgSrc: ant,
          link: 'https://github.com/SprechND30/ant_tracking',
          linkText: "Project GitHub",
          description: "From the start of the spring semester of 2019 through the end of the spring semester of 2020, I researched the ability of several computer vision algorithms to monitor ant movement patterns. Working in coordination with a cross-functional team of biology faculty and computer science students, I gained valuable experience with data manipulation, data visualization, and machine learning. The Github linked above contains my work from the end of last year: data preprocessing code and instructions for how to run CFNets, a deep learning algorithm. In February 2019, we presented our results at the Sigma Xi Undergraduate Research Conference, interacting with faculty and other undergraduate researchers.",
          selected: false
        },
        {
          id: 3,
          title: 'GCC Student Radio Station Website',
          subTitle: 'Web Programming Group Project',
          imgSrc: wsaj,
          link: 'https://wsaj-7626d.firebaseapp.com/',
          linkText: "Project Demo",
          description: "In this project, my team and I created a website with ReactJS for my alma mater's student-run radio station, WSAJ. The site includes a home page with news updates, a list of the DJ shows and their upcoming sets, a calendar (which is interactive from the producers' perspectives) and a contact page. You can see the site above, populated with sample data.",
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