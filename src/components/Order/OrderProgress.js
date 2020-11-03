import React, { useState } from "react";

import styled from "styled-components";

import Button from "../../modules/Button/Button";
import OrderButton from "./OrderButton";

const OrderProgressWrapperStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderProgressWrapper = styled.div`
  display: flex;
  //   flex-direction: column;
  height: 400px;
`;

const OrderProgressBar = styled.div`
  background: #fff;
  width: 4px;
  height: 100%;
  border-radius: 5px;
`;

const OrderProgressBarUpper = styled.div`
  background: #fbaf03;
  width: 100%;
  transition: 0.3s;
  height: ${(props) => props.percent};
`;

const OrderProgressList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const OrderProgressItem = styled.li`
  color: black;
  position: relative;
  margin-left: 15px;
  height: ${(props) => props.width};
`;

const OrderProgressChecker = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${(props) => (props.ready ? "#fbaf03" : "transparent")};

  position: absolute;
  top: 0;
  left: -15px;
  transform: translateX(-7.5px);

  z-index: 2;

  box-shadow: 0 0 10px #52411c;
`;

const OrderProgress = () => {
  const [progressList, setProgressList] = useState([
    {
      title: "1",
      isReady: true,
    },
    {
      title: "2",
      isReady: true,
    },
    {
      title: "3",
      isReady: true,
    },
    {
      title: "4",
      isReady: true,
    },
  ]);

  const [proggressPercent, setProggressPercent] = useState(100);

  const progressStep = Math.round(100 / progressList.length);

  const test = () => {
    if (proggressPercent == 100) return;

    let currentItem = progressList.find((item) => item.isReady == false);

    let newList = progressList.map((item) => {
      if (item == currentItem) {
        item.isReady = true;
      }

      return item;
    });

    setProgressList(newList);
    setProggressPercent(proggressPercent + progressStep);
  };

  return (
    <OrderProgressWrapperStyles>
      <OrderProgressWrapper>
        <OrderProgressList>
          {progressList.map((item, index) => (
            <OrderProgressItem
              key={item.title}
              ready={item.isReady}
              width={`${progressStep}%`}
            >
              <OrderProgressChecker ready={item.isReady} />
              {item.title}
            </OrderProgressItem>
          ))}
        </OrderProgressList>
        <OrderProgressBar>
          <OrderProgressBarUpper percent={`${proggressPercent}%`} />
        </OrderProgressBar>
        <OrderProgressList>
          {progressList.map((item, index) => (
            <OrderProgressItem
              key={item.title}
              ready={item.isReady}
              width={`${progressStep}%`}
            >
              <OrderProgressChecker ready={item.isReady} />
              {item.title}
            </OrderProgressItem>
          ))}
        </OrderProgressList>
      </OrderProgressWrapper>
      <OrderButton title="Заказать" />
    </OrderProgressWrapperStyles>
  );
};

export default OrderProgress;
