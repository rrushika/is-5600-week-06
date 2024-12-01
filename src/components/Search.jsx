import React, { useState } from "react";

const Search = ({ onFilter }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onFilter(query); // Call the filter function with the input value when the button is clicked
  };

  return (
    <div className="search-bar flex items-center">
      <input
        type="text"
        placeholder="Search by tag..."
        value={query}
        onChange={handleInputChange}
        className="pa2 ba b--black-20 mr2"
      />
      <button
        onClick={handleSearch}
        className="pa2 bg-black white br2 pointer"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
