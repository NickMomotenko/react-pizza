import React from "react";

import styled from "styled-components";

import PizzaItem from "../PizzaList/PizzaItem";

import Location from "../Location/Location";
import LocationTab from "../Location/LocationTab";
import Input from "../../modules/Input/Input";
import OrderProgress from "../Order/OrderProgress";
import LocationMap from "../Location/LocationMap";

const PizzaWrapper = styled.div``;

const PizzaListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -40px;
`;

const PizzaList = () => {
  const pizzas = [
    {
      id: 1,
      name: "Chicken Rice",
      description: "With green salad and salted potato",
      size: [20, 30, 40],
      price: 9.25,
      img: require("../../assets/1.png"),
    },
    {
      id: 2,
      name: "Chicken Rice",
      description: "With green salad and salted potato",
      size: [20, 30, 40],
      price: 9.25,
      img: require("../../assets/1.png"),
    },
  ];

  return (
    <PizzaWrapper>
      {/* <PizzaListWrapper>
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id} {...pizza} />
        ))}
        
      </PizzaListWrapper> */}
      <Location />
      <LocationTab />
      {/* <Input name="search" placeholder="Find your favorite food.." /> */}
      {/* <OrderProgress /> */}
      {/* <LocationMap /> */}
    </PizzaWrapper>
  );
};

export default PizzaList;
