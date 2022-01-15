import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const SearchForm = ({filterData, setSearchTerm}) => {

    return(
        <div className="SearchForm mt-5">
            <Form onSubmit={filterData}>
                <Row>
                    <Col md={9}>
                        <input type="text" className="form-control" name="searchTerm" onChange={(e) => setSearchTerm(e.target.value)}/>
                    </Col>
                    <Col md={3}>
                        <button type="submit" className="form-control btn btn-warning" name="searchButton">Search Brewery</button>
                    </Col>
                </Row>
            </Form>
            <div className='mt-5'></div>
        </div>
  )  


}


export default SearchForm;