import React from 'react';
import { Link } from 'react-router-dom';

const BreweryData = ({brewery}) => {

    return(
        <div key={brewery.id}>
            <div>Name: {brewery.name}</div>
            <div>Brewery Type: {brewery.brewery_type}</div>
            <div>City:{brewery.city}</div>
            <Link to={{
                  pathname: `/details/${brewery.id}`
                }}>
                <button>View Details</button>
            </Link>
        </div>
  )  


}


export default BreweryData;