import React, { useState, useEffect } from "react";

import ReactMapGL, { Marker } from "react-map-gl";

import styled from "styled-components";

const token =
  "pk.eyJ1Ijoibmlja21vbW90ZW5rbyIsImEiOiJja2gwZmlyaTExMTZjMnFwYzkzZmV4aDZzIn0.cJnvWL9JvZd55keGW85vWg";

const LocationMapMarker = styled.img.attrs((props) => ({
  src: props.url,
}))`
  height: 20px;
  width: 20px;
  display: inline-block;
`;

const LocationMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: "500px",
    height: "500px",
    zoom: 12,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport({
        ...viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <ReactMapGL {...viewport} mapboxApiAccessToken={token}>
      <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
        <LocationMapMarker url={require("../../assets/icon/placeholder.svg")} />
      </Marker>
    </ReactMapGL>
  );
};

export default LocationMap;
