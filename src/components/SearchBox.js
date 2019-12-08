import React from 'react';
import '../css/SearchBox.css';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div>
          <input 
          className=''
          type='search' 
          placeholder='type in keyword and filter through my projects'
          onChange = { searchChange } 
          />
        </div>
    )
}

export default SearchBox;