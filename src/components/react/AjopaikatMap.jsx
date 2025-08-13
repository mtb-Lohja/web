import React from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";

// This is the data we show on map
import geodata from "../../data/ajopaikat.json";

const AjopaikatMap = () => {
  const center = [60.22987064, 24.07661212];

  let onEachFeature = (feature, layer) => {
    if (!feature.properties || !feature.properties.title) {
      return;
    }

    layer.bindPopup(
      `<h4>${feature.properties.title}</h4><p>${feature.properties.description}</p>`
    );
  };
  
  const mapStyle = {
    margin: "0px auto",
    maxWidth: "960px",
    minHeight: "600px",
  };

  return (
    <MapContainer style={mapStyle} center={center} zoom={12}>
      <TileLayer
        url={"http://tiles.kartat.kapsi.fi/peruskartta/{z}/{x}/{y}.jpg"}
        attribution="Sisältää <a href='http://www.maanmittauslaitos.fi/avoindata_lisenssi_versio1_20120501'>Maanmittauslaitoksen Maastotietokannan 06/2012</a> aineistoa"
      />
      <GeoJSON data={geodata} onEachFeature={onEachFeature} />
    </MapContainer>
  );
};

export default AjopaikatMap;