import React from "react";

import styled from "styled-components";

import { Route } from "react-router-dom";

import Header from "../Header/Header";
import Navigation from "../../modules/Navigation/Navigation";
import SortFilter from "../../modules/SortFilter/SortFilter";
import Title from "../../modules/Title/Title";

import PizzaList from "../PizzaList/PizzaList";
import BusketList from "../BusketList/BusketList";
import Login from "../Login/Login";

const MainContentWrapper = styled.main`
  background-color: #fcfcfc;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 50px;
  height: 100%;
`;

const MainContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const MainContentContents = styled.div``;

const MainContent = () => {
  return (
    <MainContentWrapper>
      <Header />
      <MainContentRow>
        <Navigation />
        <SortFilter />
      </MainContentRow>
      <MainContentContents>
        {/* <Title title="Все пиццы" /> */}
        {/* <Title title="Корзина" /> */}
        <Route exact path="/" component={PizzaList} />
        <Route path="/busket" component={BusketList} />
      </MainContentContents>
    </MainContentWrapper>
  );
};

export default MainContent;
