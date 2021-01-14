import React from "react";
import { Map as LeafletMap, TileLayer, GeoJSON } from "react-leaflet";
import "./Map.css";

function Map({ countries, center, zoom }) {

  const countryStyle = {
    fillColor: "red",
    fillOpacity: 1,
    color: "black",
    weight: 2,
  };

  const changeCountryColor = (event) => {
    event.target.setStyle({
      color: "green",
      fillColor: "blue",
      fillOpacity: 1,
    });
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    console.log(countryName);
    layer.bindPopup(countryName);

    layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)
    // const colorIndex = Math.floor(Math.random() * this.colors.length);
    // layer.options.fillColor = this.colors[colorIndex]; //0

    layer.on({
      click: changeCountryColor,
    });
  };

  return (
    <div className="map">
      <LeafletMap  center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON
          style={countryStyle}
          data={countries}
          onEachFeature={onEachCountry}
        ></GeoJSON>
      </LeafletMap>
    </div>
  );
}

export default Map;
