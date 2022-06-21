import React from 'react';
import '../css/searchBar.css';

const SearchBar = ({searchValue, setSearchValue}) => {
  return (
    <div className="search_bar_container">
      <label htmlFor="search">Search By Name: </label>
      <input
        className="search_bar_input"
        id="search"
        type="text"
        onChange={e => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="John Doe..."
      />
    </div>
  );
};

export default SearchBar;
