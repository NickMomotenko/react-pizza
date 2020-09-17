import React from "react";
import styled from "styled-components";

// import "./Busket.scss";

const BusketStyle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  background: #fe5f1e;
  border-radius: 30px;
  padding: 10px 23px;

  color: #fff;
`;

const BusketPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;

  &:after {
    content: "";
    display: inline-block;
    height: 30px;
    width: 1px;
    background: rgba(255, 255, 255, 0.25);
    margin-left: 10px;
  }
`;

const BusketCounter = styled.div`
  margin-left: 10px;

  &:before {
    content: "";
    display: inline-block;
    height: 16px;
    width: 16px;
    background: url(../../assets/icon/busket.svg) center no-repeat;
    vertical-align: middle;
    margin-right: 5px;
  }
`;

const Busket = ({ price, counter }) => {
  return (
    <BusketStyle>
      <BusketPrice>{`${price} грн`}</BusketPrice>
      <BusketCounter>{counter}</BusketCounter>
    </BusketStyle>
  );
};

export default Busket;
