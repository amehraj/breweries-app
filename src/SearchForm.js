import React from 'react';

const SearchForm = ({filterData, setSearchTerm}) => {

    return(
        <div className="SearchForm">
            <form onSubmit={filterData}>
            <input type="text" name="searchTerm" onChange={(e) => setSearchTerm(e.target.value)}/>
            <button type="submit" name="searchButton">Search</button>
        </form>
        </div>
  )  


}


export default SearchForm;