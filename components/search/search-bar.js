import React from "react";
import classes from "./search-bar.module.css";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className={classes.searchBarContainer}>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={onSearchChange}
        className={classes.searchInput}
      />
    </div>
  );
}

export default SearchBar;
