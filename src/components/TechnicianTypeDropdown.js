import React from 'react';
import {Dropdown} from 'react-bootstrap';

const options = [
  'Plumbing',
  'Electrical',
  'Carpeting',
  'Furniture',
  'Tiling'
];

const TechnicianTypeDropdown = ({
  selected,
  setSelectedOption
}) => (
  <div id='TechnicianDropdown'>
    <div>
      <h5>Find a</h5>
      <Dropdown>
        <Dropdown.Toggle>
          {selected}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            options.map(option => (
              <Dropdown.Item
                key={option}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
      <h5>technician</h5>
    </div>
  </div>
);

export default TechnicianTypeDropdown;
