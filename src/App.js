import React, { useState } from "react";
import { sendText } from "./api/fetchText";

import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await sendText(query);

      // setWeather(data);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      {/*
      <div className="city">
        <div style={{ fontSize: "3em" }} className="city-temp">
          JCE-weather
        </div>
        <h2 className="city-name">
          <span>Te damos el clima</span>
        </h2>
        <p style={{ alignSelf: "start", whiteSpace: "nowrap" }}>
          powered by{" "}
          <span className="newLink">
            {" "}
            <a href="https://openweathermap.org/">OpenWeatherMap</a>
          </span>
        </p>
      </div>
*/}
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {/*{weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}*/}
    </div>
  );
};

export default App;
