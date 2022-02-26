import React from 'react';

const Search = () => (
  <form action="/" method="get">
  <label htmlFor="header-search">
      <span className="visually-hidden">Etsi tuotteita: </span>
  </label>
  <input
      type="text"
      id="header-search"
      placeholder="Tuotehaku"
      name="s" 
  />
  <button type="submit">Etsi!</button>
  </form>
  );
  export default Search;