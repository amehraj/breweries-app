import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import BreweryData from './BreweryData';

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
      <SearchForm filterData={filterData} setSearchTerm={setSearchTerm}/>
      {filteredData.map(brewery => (
        <div key={brewery.id}>
            <BreweryData brewery={brewery}/>
        </div>
      ))}
    </div>
  );
}

export default App;
