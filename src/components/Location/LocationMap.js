import React, { useState, useEffect } from "react";

import ReactMapGL, { Marker } from "react-map-gl";

import styled from "styled-components";
// import { useLocationMapData } from "../../context/locationContext";

import { useLocation } from "../../hooks/location";

const LocationMapMarker = styled.img.attrs((props) => ({
  src: props.url,
}))`
  height: 20px;
  width: 20px;
  display: inline-block;
`;

const token =
  "pk.eyJ1Ijoibmlja21vbW90ZW5rbyIsImEiOiJja2gwZmlyaTExMTZjMnFwYzkzZmV4aDZzIn0.cJnvWL9JvZd55keGW85vWg";

const LocationMap = () => {
  const { viewport } = useLocation();

  return (
    <ReactMapGL {...viewport} mapboxApiAccessToken={token}>
      <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
        <LocationMapMarker url={require("../../assets/icon/placeholder.svg")} />
      </Marker>
    </ReactMapGL>
  );
};

export default LocationMap;
