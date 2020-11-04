import React, { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const locationProvider = ({ children }) => {
  const [locationData, setLocationData] = useState({});

  const testFun = () => {};

  return (
    <LocationContext.Provider value={{ locationData, testFun }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationMapData = () => useContext(LocationContext);
