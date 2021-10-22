import React, { useEffect, useState } from "react";
import { fetchOriginal, fetchText, sendText } from "./api/fetchText";

import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [callback, setCallback] = useState(false);
  const [dec, setDec] = useState(false);
  const [data, setData] = useState([]);
  const [ogData, setOgData] = useState([]);

  const crear = async (e) => {
    if (e.key === "Enter") {
      await sendText(query);
      setCallback(!callback);

      // setWeather(data);
      setQuery("");
    }
  };

  useEffect(() => {
    fetchOriginal()
      .then((res) => {
        // console.log(res);
        setOgData(res);
      })
      .catch((err) => console.log(err));
    fetchText()
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }, [callback]);

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Crear..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={crear}
      />
      <button className="main-button" onClick={() => setDec(!dec)}>
        {dec ? "Encrypt" : "Decrypt"}
      </button>
      <div className="city">
        {!dec &&
          ogData.map((obj) => (
            <ul>
              <li>
                <h2 className="enc-text">{obj.text}</h2>
              </li>
            </ul>
          ))}
        {dec &&
          data.map((obj) => (
            <ul>
              <li>
                <h2 className="city-name">
                  <span>{obj.text}</span>
                </h2>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default App;
