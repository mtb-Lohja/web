import React from "react";
import Layout from "../../components/Layout";
import { Map, GeoJSON, TileLayer } from "react-leaflet";

// This is the data we show on map
import geodata from "../../data/ajopaikat.json";

// Do some tricks to ensure that markers show properly, for some reason
// react-leaflet does not take care of all this
import "leaflet/dist/leaflet.css";
import { Marker, icon } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconShadow from "leaflet/dist/images/marker-shadow.png";

const AjopaikatPage = ({ location }) => {
  const center = [60.22987064, 24.07661212];

  // Due to static build this might not be available... but without this markers fail to show
  if (Marker) {
    Marker.prototype.options.icon = icon({
      iconUrl: markerIcon,
      shadowUrl: markerIconShadow
    });
  }

  let onEachFeature = (feature, layer) => {
    if (!feature.properties || !feature.properties.title) {
      return;
    }

    layer.bindPopup(
      `<h4>${feature.properties.title}</h4><p>${
        feature.properties.description
      }</p>`
    );
  };
  const mapStyle = {
    margin: "0px auto",
    maxWidth: "960px",
    minHeight: "600px"
  };

  return (
    <Layout location={location}>
      <h2>MTB-Lohja toy ajopaikat</h2>
      <p>
        Noin vuonna 2012 alettiin kerätä ajopaikkojen nimiä yhdelle kartalle.
        Loppuun asti ei päästy, mutta alla on kaikkein kuuluisimmat paikat.
        Klikkaa alueita, polkuja, tai viittoja niin näet tarkemmat tiedot.
      </p>
      <Map style={mapStyle} center={center} zoom={12}>
        <TileLayer
          url={"http://tiles.kartat.kapsi.fi/peruskartta/{z}/{x}/{y}.jpg"}
          attribution="Sisältää <a href='http://www.maanmittauslaitos.fi/avoindata_lisenssi_versio1_20120501'>Maanmittauslaitoksen Maastotietokannan 06/2012</a> aineistoa"
        />
        <GeoJSON data={geodata} onEachFeature={onEachFeature} />
      </Map>
    </Layout>
  );
};

export default AjopaikatPage;
