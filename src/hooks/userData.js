import React, { useState } from "react";

export const useData = () => {
  const [data, setData] = useState({
    number: null,
    name: "",
    location: null,
  });

  const setValues = (values) => {
    setData((prev) => ({
      ...prev,
      ...values,
    }));
  };

  return { data, setValues };
};
