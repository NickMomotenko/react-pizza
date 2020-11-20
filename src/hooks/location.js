import React, { useState, useEffect } from "react";

export const useLocation = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: "500px",
    height: "500px",
    zoom: 12,
  });

  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    getUserLocation();
  });

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport({
        ...viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });

      // setTimeout(() => {
      //   setIsReady(true);
      // }, 0);
    });
  };

  return { viewport, getUserLocation, isReady };
};
