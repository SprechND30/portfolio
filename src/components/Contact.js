import React from 'react';

import {SocialMediaIconsReact} from 'social-media-icons-react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact(props) {

  return(
    <div>
      <h2 className="display-4 font-weight-light">Contact</h2>
      <Container>
        <Row className="justify-content-start" xs={4} md={6} lg={8}>
          <Col>
            <SocialMediaIconsReact borderColor="rgba(255,255,255,0.25)" borderWidth="1" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(210,65,55,1)" iconSize="5" roundness="24%" url="mailto:ndsprech@gmail.com" size="32" />
          </Col>

          <Col>
            <SocialMediaIconsReact borderColor="rgba(255,255,255,0.25)" borderWidth="1" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(23,103,165,1)" iconSize="5" roundness="24%" url="https://www.linkedin.com/in/nathaniel-sprecher/" size="32" />
          </Col>

          <Col>
            <SocialMediaIconsReact borderColor="rgba(255,255,255,0.25)" borderWidth="1" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(33,37,40,1)" iconSize="5" roundness="24%" url="https://github.com/SprechND30" size="32" />
          </Col>
        </Row>
      </Container>
      
    </div>
    
  );
}

export default Contact