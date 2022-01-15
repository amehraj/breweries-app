import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import BreweryData from './BreweryData';
import { Container, Row, Col } from 'react-bootstrap';

const App = (props) => {
  const [apiData, setapiData] = useState(props.apiData);
  const [filteredData, setfilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(props.searchTerm);

  useEffect(async () => {
    const breweryData = await axios('https://api.openbrewerydb.org/breweries');
    setapiData(breweryData.data);
    setfilteredData(breweryData.data);
  }, []);

  const filterData = (e) => {
    e.preventDefault();
    if(searchTerm===""){
      setfilteredData(apiData);
    }
    else{
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const newFiteredData = apiData.filter((brewery) => brewery.name.toLowerCase().includes(lowercasedSearchTerm) || brewery.city.toLowerCase() === lowercasedSearchTerm || brewery.brewery_type.toLowerCase() === lowercasedSearchTerm);
      setfilteredData(newFiteredData);
    }

  }

  App.defaultProps = {
    searchTerm: "",
    apiData: []
  }

  return (
    <div className="App">
      <h1><center>Breweries App</center></h1>
      <Container>
        <Row>
          <SearchForm filterData={filterData} setSearchTerm={setSearchTerm}/>
        </Row>
        <Row>
          {filteredData.map(brewery => (
            <Col md={4}>
            <div key={brewery.id} className="card mt-4">
                <BreweryData brewery={brewery}/>
            </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
