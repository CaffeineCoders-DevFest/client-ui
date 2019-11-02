import React, {useState} from 'react';
import {Container, Jumbotron, Button, Spinner} from 'react-bootstrap';
import callForTechnicianList from '../calls/callForTechnicianList';
import TechnicianTypeDropdown from '../components/TechnicianTypeDropdown';
import ZipCodeInput from '../components/ZipCodeInput';
import Result from '../components/Result';

function SelectByTypePage() {
  const [selectedOption, setSelectedOption] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [results, setResults] = useState({
    isLoading: false,
    list: [],
  });

  const fetchResults = async () => {
    setResults({
      isLoading: true,
      list: [],
    });
    const newResults = await callForTechnicianList(selectedOption, zipCode);
    setResults({
      isLoading: false,
      list: newResults,
    });
  };

  return (
    <Container id='SelectByTypePage'>
      <Jumbotron>
        <TechnicianTypeDropdown
          selected={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <ZipCodeInput
          zipCode={zipCode}
          setZipCode={setZipCode}
        />
        <div id='GoButton'>
          <Button
            disabled={!zipCode || !selectedOption}
            onClick={fetchResults}
          >
            Go
          </Button>
        </div>
      </Jumbotron>
      <div id='Results'>
        {results.isLoading && <Spinner animation='border'/>}
        {
          !results.isLoading && results.list.map(result => (
            <Result
              key={result.name}
              name={result.name}
              location={result.location}
              rate={result.rate}
              phoneNumber={result.phoneNumber}
              email={result.email}
            />
          ))
        }
      </div>
    </Container>
  );
}

export default SelectByTypePage;
