import React from "react";

import styled from "styled-components";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

const CounterWrapp = styled.div`
  display: flex;
  align-items: center;
`;

const CounterValue = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

const Counter = ({ count, setPizzaCounter }) => {
  const incrementCounter = () => {
    setPizzaCounter(count + 1);
  };

  const descrementCounter = () => {
    if (count == 1) {
      setPizzaCounter(1);
    } else if (count == 0) {
      setPizzaCounter(1);
    } else {
      setPizzaCounter(count - 1);
    }
  };

  return (
    <CounterWrapp>
      <ButtonCustom
        label="-"
        bg="#fff"
        color="black"
        shadow="#bf9d9d"
        onClick={() => descrementCounter()}
      />
      <CounterValue>{count}</CounterValue>
      <ButtonCustom
        label="+"
        bg="#fbaf03"
        color="#fff"
        shadow="#fbaf03"
        onClick={() => incrementCounter()}
      />
    </CounterWrapp>
  );
};

export default Counter;
