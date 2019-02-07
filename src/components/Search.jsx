import React from 'react';

const Search = ({handleSearch, searchQuery}) => (
  <form className="search">
    <input
      className="search__input"
      type="text"
      placeholder="Поиск авторов по имени"
      value={searchQuery}
      onChange={handleSearch}/>
  </form>
);

export default Search;
