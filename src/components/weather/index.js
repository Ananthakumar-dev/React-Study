import React, { useEffect, useState } from "react";
import SearchBar from "./search";
import UseFetchData from "../../hooks/useFetchData";
import "./index.css";

export default function Weather() {
  const [search, setSearch] = useState("");
  const loading = null;
  const error = null;

  function handleFetchWeather() {
    const API_KEY = "ad1b4cf8fdbc84f5d3ceaf6eadfd316a";
    const query = search;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;
    const { data, loading, error } = UseFetchData(url);

    console.log(data);
  }

  return (
    <div className="weather-app">
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleFetchWeather={handleFetchWeather}
      />

      <div className="weather-report">
        {loading ? <h3> Loading... </h3> : null}

        {error ? <h3> Error... Something went wrong </h3> : null}
      </div>
    </div>
  );
}
