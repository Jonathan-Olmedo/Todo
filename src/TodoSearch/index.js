import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {
      searchValue,
      setSearchValue,
  } = React.useContext(TodoContext)
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