import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Geocode from "react-geocode";

export const useLocation = () => {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: "500px",
    height: "500px",
    zoom: 12,
  });

  const [isReady, setIsReady] = useState(false);

  const history = useHistory();

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (isReady) {
      // history.push("/login");
    }
  }, [isReady]);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport({
        ...viewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });

      setTimeout(() => {
        setIsReady(true);
      }, 2000);
    });
  };

  return { viewport, isReady };
};
