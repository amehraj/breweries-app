import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


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
    <Container>
        <Row>
            <Col md={3}></Col>
            
                
            {filteredData.map(brewery => (
                <Col md={6}>
                <div key={brewery.id} className="card text-center border border-warning">
                        <div className="card-body">
                        <h3 className="card-title">Showing detail about each brewery</h3>
                        <div>Name: {brewery.name}</div>
                        <div>Brewery Type: {brewery.brewery_type}</div>
                        <div>Street: {brewery.street}</div>
                        <div>Address 2: {brewery.address_2}</div>
                        <div>Address 3: {brewery.address_3}</div>
                        <div>City: {brewery.city}</div>
                        <div>State: {brewery.state}</div>
                        <div>County Province: {brewery.county_province}</div>
                        <div>Postal Code:{brewery.postal_code}</div>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={{
                            pathname: `/`
                            }}>
                            <button className="btn btn-warning form-control">Go Back</button>
                        </Link>
                    </div>
                </div>
                </Col>
            ))}
        
        <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default BreweryDetails;
