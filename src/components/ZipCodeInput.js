import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';


const ZipCodeInput = ({
  zipCode,
  setZipCode
}) => (
  <div id='ZipCodeInput'>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text>Zip Code</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        value={zipCode}
        onChange={event => setZipCode(event.target.value)}
      />
    </InputGroup>
  </div>
)

export default ZipCodeInput;
