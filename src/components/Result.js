import React from 'react';
import {Card} from 'react-bootstrap';

function Result({
  name,
  location,
  rate,
  phoneNumber,
  email,
}) {
  console.log({
    name,
    location,
    rate,
    phoneNumber,
    email,
  })
  return (
    <Card className='result'>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Zip Code: {location}
        </Card.Text>
        <Card.Text>
          Rate: {rate}
        </Card.Text>
        <Card.Text>
          Phone #: {phoneNumber}
        </Card.Text>
        <Card.Text>
          Email: {email}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Result;
