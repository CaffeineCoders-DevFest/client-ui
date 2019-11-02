import React, {useState} from 'react';
import _get from 'lodash.get';
import _isArray from 'lodash.isarray';
import {Container, Jumbotron, Button} from 'react-bootstrap';
import categories from '../categories.json';

function SelectByProblemPage() {
  const [path, setPath] = useState('');

  const isRoot = path === '';
  let isLeaf = true;
  let options = _get(categories, path, categories);
  if (!_isArray(options)) {
    isLeaf = false;
    options = Object.keys(options);
  }

  const selectOption = option => {
    if (!isLeaf) {
      setPath(`${path ? `${path}.` : ''}${option}`);
    }
  };

  const goBack = () => {
    const [,newPath] = path.match(/(.*)\.[^.]+/) || ['', ''];
    setPath(newPath);
  };

  return (
    <Container>
      <Jumbotron>
        {!isRoot && <Button id='BackButton' onClick={goBack}>Back</Button>}
        {options.map(option => (
          <Button
            key={option}
            onClick={() => selectOption(option)}
          >
            {option}
          </Button>
        ))}
      </Jumbotron>
    </Container>
  );
}

export default SelectByProblemPage;
