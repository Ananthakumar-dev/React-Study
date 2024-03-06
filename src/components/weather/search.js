import React from "react";

export default function SearchBar({ search, setSearch, handleFetchWeather }) {
  return (
    <div className="search-engine">
      <div className="search-bar">
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="search-btn">
        <button type="button" onClick={handleFetchWeather}>
          Search
        </button>
      </div>
    </div>
  );
}
