import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./Map";
import "leaflet/dist/leaflet.css";

import * as data from "./data/regions.json";

const App = () => {
  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    const getRegionsData = () => {
      console.log("RUN OF getRegions", data["features"])
      setMapCountries(data["features"]);
    }

    getRegionsData();
  }, []);

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
        </div>
        <Map
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>

    </div>
  );
};

export default App;
