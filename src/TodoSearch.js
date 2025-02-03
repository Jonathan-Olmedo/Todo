import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input
    value={searchValue}
    onChange={ (event) => {
        setSearchValue(event.target.value);
      }}
      placeholder="Cortar cebolla"
      className="TodoSearch"
    />
  );
}

export { TodoSearch };