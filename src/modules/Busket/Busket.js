import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Link } from "react-router-dom";

const BusketStyle = styled.div`
  display: inline-flex;
  background: #fe5f1e;
  border-radius: 30px;
  padding: 10px 23px;
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    background: #fece1e;
  }
`;

const BusketIcon = styled.div`
  height: 20px;
  width: 20px;
  border-ra
`;


const BusketCounter = styled.div`
  margin-left: 10px;

  &:before {
    content: "";
    display: inline-block;
    height: 16px;
    width: 16px;
    background: url(${require("../../assets/icon/busket.svg")}) center no-repeat;
    vertical-align: middle;
    margin-right: 5px;
  }
`;

const Busket = ({ price }) => {
  const counter = useSelector((state) => state.orders.orders);

  return (
    <Link to="/busket">
      <BusketStyle>
        {/* <BusketCounter>{counter.length}</BusketCounter> */}
        <BusketIcon />
      </BusketStyle>
    </Link>
  );
};

export default Busket;
