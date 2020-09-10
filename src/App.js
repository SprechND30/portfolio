import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, NavbarBrand } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Nate Sprecher',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Nate Sprecher',
        subTitle: 'My Projects',
        text: ''
      },
      about: {
        title: 'About Me'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <div className="whole-page">
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Portfolio</Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="Navbar-toggle"/>
              <Navbar.Collapse id="Navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />

            <Footer />
          </div>
        </Container>
      </Router>
    );
  }
  
}

export default App;
