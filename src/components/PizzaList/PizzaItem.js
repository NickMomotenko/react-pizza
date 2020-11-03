import React, { useState } from "react";

import styled, { keyframes } from "styled-components";

import Counter from "../../modules/Counter/Counter";

import Button from "../../modules/Button/Button";

import { UIWrapper, UIContent } from "../../UI/UI";

const custom = keyframes`
  from{
    transform: scale(1);
  }
  to{
    transform: scale(1.2);
  }
`;

const PizzaItemWrapper = styled.li`
  width: calc(100% / 4);
  margin-right: 40px;
  position: relative;

  // &:hover .sc-fKgIGh.bkLjmK {
  //   transition: all 0.4s;
  //   animation: ${custom} 0.3s linear forwards alternate;
  // }
`;

const PizzaItemContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const PizzaItemImgWrapp = styled.div`
  border-radius: 50%;
  margin-left: -30px;
  overflow: hidden;
  flex-shrink: 0;

  width: 100px;
  height: 100px;
`;

const PizzaItemImgIcon = styled.img.attrs((props) => ({
  src: props.url,
}))`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const PizzaItemInfo = styled.div`
  margin-left: 8px;
`;

const PizzaItemName = styled.div`
  font-size: 19px;
  margin-bottom: 10px;
  font-weight: 700;
  color: #000000;
`;

const PizzaItemDescription = styled.div`
  color: #a4a2b4;
  font-size: 13px;
  margin-bottom: 4px;
`;

const PizzaItemOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 14px;
`;

const PizzaItemCost = styled.div``;

const PizzaItemCostCurrency = styled.span`
  color: #fbb20e;
  font-weight: 700;
  font-size: 13px;
`;

const PizzaItemCostValue = styled.span`
  font-weight: 700;
  font-size: 16px;
  margin-left: 3px;
`;

const PizzaItemSize = styled.div`
  position: absolute;
  right: -20px;
  bottom: 100%;
  display: flex;
  align-items: center;
`;

const PizzaItemSizeValue = styled.div`
  background: ${(props) => (props.size === props.active ? "#f4b11a" : "#fff")};
  transition: all 0.4s;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 5px
    ${(props) => (props.size === props.active ? "#f4b11a" : "#d8a3a3")};
  color: ${(props) => (props.size === props.active ? "#fff" : "#915959")};
  margin-right: 5px;
  cursor: pointer;

  &:nth-child(2) {
    transform: translateY(20px);
  }

  &:nth-child(3) {
    transform: translateY(40px);
  }

  &:last-child {
    margin-right: 0;
  }
`;

const PizzaItemOrderButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PizzaItem = ({ name, description, price, img, size }) => {
  const [pizzaSize, setPizzaSize] = useState(size[0]);
  const [pizzaCounter, setPizzaCounter] = useState(1);

  return (
    <PizzaItemWrapper>
      <UIWrapper>
        <UIContent>
          <PizzaItemContent>
            <PizzaItemImgWrapp>
              <PizzaItemImgIcon url={img} />
            </PizzaItemImgWrapp>
            <PizzaItemInfo>
              <PizzaItemName>{name}</PizzaItemName>
              <PizzaItemDescription>{description}</PizzaItemDescription>
              <PizzaItemOptions>
                <Counter
                  count={pizzaCounter}
                  setPizzaCounter={setPizzaCounter}
                />
              </PizzaItemOptions>
              <PizzaItemOrderButton>
                <PizzaItemCost>
                  <PizzaItemCostCurrency>$</PizzaItemCostCurrency>
                  <PizzaItemCostValue>{price}</PizzaItemCostValue>
                </PizzaItemCost>
                <Button title="Order" />
              </PizzaItemOrderButton>
            </PizzaItemInfo>
            <PizzaItemSize>
              {size.map((size) => (
                <PizzaItemSizeValue
                  key={size}
                  size={size}
                  active={pizzaSize}
                  onClick={() => setPizzaSize(size)}
                >
                  {size}
                </PizzaItemSizeValue>
              ))}
            </PizzaItemSize>
          </PizzaItemContent>
        </UIContent>
      </UIWrapper>
    </PizzaItemWrapper>
  );
};

export default PizzaItem;
