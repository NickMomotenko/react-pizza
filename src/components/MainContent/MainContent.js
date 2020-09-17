import React from "react";

import "./MainContent.scss";

import Header from "../Header/Header";
import Navigation from "../../modules/Navigation/Navigation";
import SortFilter from "../../modules/SortFilter/SortFilter";
import Title from "../../modules/Title/Title";

import PizzaList from "../PizzaList/PizzaList";
import BusketList from "../BusketList/BusketList";

const MainContent = () => {
  return (
    <div className="main-content container">
      <Header />
      <div className="main-content__row">
        <Navigation />
        <SortFilter />
      </div>
      <div className="main-content__container">
        {/* <Title title="Все пиццы" /> */}
        <Title title="Корзина" />
        {/* <PizzaList /> */}
        <BusketList />
      </div>
    </div>
  );
};

export default MainContent;
