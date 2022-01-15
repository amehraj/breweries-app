import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const newFiteredData = apiData.filter((brewery) => brewery.name.toLowerCase().includes(lowercasedSearchTerm) || brewery.city.toLowerCase() === lowercasedSearchTerm || brewery.brewery_type.toLowerCase() === lowercasedSearchTerm);
    setfilteredData(newFiteredData);
  }

  App.defaultProps = {
    searchTerm: "",
    apiData: []
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={filterData}>
          <input type="text" name="searchTerm" onChange={(e) => setSearchTerm(e.target.value)} required/>
          <button type="submit" name="searchButton">Search</button>
        </form>
      </div>
      {filteredData.map(brewery => (
      <div key={brewery.id}>
          <div>Name: {brewery.name}</div>
          <div>Brewery Type: {brewery.brewery_type}</div>
          <div>City:{brewery.city}</div>
          <button>View Details</button>
      </div>
      ))}
    </div>
  );
}

export default App;
