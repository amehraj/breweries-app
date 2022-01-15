import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const BreweryDetails = () => {
  const [filteredData, setfilteredData] = useState([]);

  const location = useLocation()
  const brewId = location.pathname.split("/details/")[1];

  useEffect(async () => {
    const breweryData = await axios('https://api.openbrewerydb.org/breweries');
    const newBreweryData = breweryData.data.filter((brewery) => brewery.id === brewId);
    setfilteredData(newBreweryData);
  }, []);


    return (
    <div className="BreweryDetails">
      {filteredData.map(brewery => (
        <div key={brewery.id}>
            <h3>Showing Details about each brewery</h3>
            <div>Name: {brewery.name}</div>
            <div>Brewery Type: {brewery.brewery_type}</div>
            <div>Street: {brewery.street}</div>
            <div>Address 2: {brewery.address_2}</div>
            <div>Address 3: {brewery.address_3}</div>
            <div>City:{brewery.city}</div>
            <div>State:{brewery.state}</div>
            <div>County Province:{brewery.county_province}</div>
            <div>Postal Code:{brewery.postal_code}</div>
            <Link to={{
                  pathname: `/`
                }}>
                <button>Go Back</button>
            </Link>
        </div>
      ))}
    </div>
  );
}

export default BreweryDetails;
