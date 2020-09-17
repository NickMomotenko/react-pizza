import React from "react";

import "./PizzaList.scss";

import PizzaItem from "../PizzaList/PizzaItem";

const PizzaList = () => {
  const pizzas = [
    {
      id: 1,
      name: "Чизбургер-пицца",
      options: { dough: ["тонкое", "традиционное"], size: [26, 30, 40] },

      img: require("../../assets/1.png"),
    },
    {
      id: 2,
      name: "Сырная",
      options: { dough: ["тонкое", "традиционное"], size: [26, 30, 40] },

      img: require("../../assets/2.png"),
    },
    {
      id: 3,
      name: "Креветки по азиатски",
      options: { dough: ["тонкое", "традиционное"], size: [26, 30, 40] },

      img: require("../../assets/3.png"),
    },
    {
      id: 4,
      name: "Сырный ципленок",
      options: { dough: ["тонкое", "традиционное"], size: [26, 30, 40] },

      img: require("../../assets/4.png"),
    },
  ];

  return (
    <div className="pizza">
      <ul className="pizza__list">
        {pizzas.map((pizza) => (
          <PizzaItem key={pizza.id} {...pizza} />
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
