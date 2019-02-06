import React from 'react';

const Search = ({handleSearch, searchQuery}) => (
  <form>
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => handleSearch(e)}/>
  </form>
);

export default Search;
