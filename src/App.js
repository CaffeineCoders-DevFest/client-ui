import React from 'react';
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <Container>
      <Jumbotron className='centered-children'>
        <h1>Welcome!</h1>
        <Row>
          <Col xs={6}>
            <Button variant="primary">Select a Technician by Type</Button>
          </Col>
          <Col xs={6}>
            <Button variant="primary">Learn more</Button>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default App;
