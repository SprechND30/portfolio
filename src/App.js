import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, NavbarBrand } from 'react-bootstrap';
import NavBar from 'react-bootstrap/NavBar';
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
        title: 'My Work',
        subTitle: 'Check out some of my projects below',
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

          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>Nate Sprecher</NavBar.Brand>

            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <NavBar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
  
}

export default App;
