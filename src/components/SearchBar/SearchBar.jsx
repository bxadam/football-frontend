import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("general");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ query, type: selectedOption });
    }
  };

  return (
    <div className="search__bar">
      <select
        className="search__select"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="general">Players</option>
        <option value="users">Teams</option>
        <option value="hashtags">Leagues</option>
      </select>
      <input
        type="text"
        className="search__input"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
      />
      <button className="search__button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
