import React from 'react';
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Home() {
  return (
    <Container>
      <Jumbotron className='centered-children'>
        <h1>Welcome!</h1>
        <h4>Select a Technician by...</h4>
        <Row>
          <Col xs={6}>
            <LinkContainer to="/by-type">
              <Button variant="primary">Technician Type</Button>
            </LinkContainer>
          </Col>
          <Col xs={6}>
            <LinkContainer to="/by-problem">
              <Button variant="primary">Problem</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Home;
