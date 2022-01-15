import React from 'react';
import { Link } from 'react-router-dom';

const BreweryData = ({brewery}) => {

    return(
            <div key={brewery.id} className="card-body text-center border border-warning" style={{backgroundColor: "##FFF4F4"}}>
                <div>Name: {brewery.name}</div>
                <div>Brewery Type: {brewery.brewery_type}</div>
                <div>City:{brewery.city}</div>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={{
                    pathname: `/details/${brewery.id}`
                    }}>
                    <button className="btn btn-warning form-control">View Details</button>
                </Link>
            </div>

  )  


}


export default BreweryData;