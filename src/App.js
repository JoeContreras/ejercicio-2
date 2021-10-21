import React, { useEffect, useState } from "react";
import { fetchText, sendText } from "./api/fetchText";

import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [callback, setCallback] = useState(false);
  const [data, setData] = useState([]);

  const crear = async (e) => {
    if (e.key === "Enter") {
      await sendText(query);
      setCallback(!callback);

      // setWeather(data);
      setQuery("");
    }
  };

  useEffect(() => {
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
      <div className="city">
        {data.map((obj) => (
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
