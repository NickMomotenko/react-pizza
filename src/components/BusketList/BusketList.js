import React from "react";
import styled from "styled-components";

import BusketTemplate from "./BusketTemplate";

import Button from "../../modules/Button/Button";

const BusketWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BusketLists = styled.ul``;

const BusketOrdersInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
`;

const BusketOrdersCounter = styled.div`
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;
  font-weight: normal;

  color: #000000;

  span {
    color: black;
    font-weight: 700;
    font-size: 20px;
  }
`;

const BusketOrdersValue = styled.div`
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;

  color: #000000;

  span {
    color: #fe5f1e;
    font-weight: 700;
    font-size: 20px;
  }
`;

const BusketItemStyle = styled.li`
  padding: 20px 0;
  border-bottom: 1px solid #f4f4f4;

  &:first-child {
    border-top: 1px solid #f4f4f4;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const BusketItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BusketItemImg = styled.img.attrs((props) => ({
  src: props.url,
}))`
  height: 80px;
  width: 80px;
  margin-right: 15px;
`;

const BusketItemDesc = styled.div`
  margin-right: 60px;
`;

const BusketItemName = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;

  color: #000000;
`;

const BusketItemInfo = styled.p`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #8d8d8d;
`;

const BusketItemOptions = styled.div`
  margin-right: 85px;

  button {
    margin-right: 12px;

    &:last-child {
      margin-right: 0;
      margin-left: 12px;
    }
  }
`;

const BusketItemOptionsCounter = styled.span`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;

  letter-spacing: 0.01em;

  color: #000000;
`;

const BusketItemPrice = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;

  color: #000000;
`;

const BusketButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BusketItemCancel = styled.div`
  margin-left: auto;
`;

const BusketItem = () => {
  return (
    <BusketItemStyle>
      <BusketItemWrapper>
        <BusketItemImg url={require("../../assets/1.png")} />
        <BusketItemDesc>
          <BusketItemName>Сырный цыпленок</BusketItemName>
          <BusketItemInfo>тонкое тесто, 26 см.</BusketItemInfo>
        </BusketItemDesc>
        <BusketItemOptions>
          <Button
            title="-"
            color="#FE5F1E"
            height="30px"
            borderSize="2px"
            borderColor="#FE5F1E"
            radius="50%"
            padding="0"
          />
          <BusketItemOptionsCounter>2</BusketItemOptionsCounter>
          <Button
            title="+"
            color="#FE5F1E"
            height="30px"
            borderSize="2px"
            borderColor="#FE5F1E"
            radius="50%"
            padding="0"
          />
        </BusketItemOptions>
        <BusketItemPrice>{`777 грн`}</BusketItemPrice>
        <BusketItemCancel>
          <Button
            title="x"
            color="#D7D7D7"
            height="30px"
            borderSize="2px"
            borderColor="#D7D7D7"
            radius="50%"
            padding="0"
          />
        </BusketItemCancel>
      </BusketItemWrapper>
    </BusketItemStyle>
  );
};

const BusketList = () => {
  const orders = [1, 2, 3];
  const counter = 1;
  return (
    <BusketWrapper>
      <BusketLists>
        {orders.length ? (
          orders.map((pizza) => <BusketItem />)
        ) : (
          <BusketTemplate />
        )}
      </BusketLists>
      <BusketOrdersInfo>
        <BusketOrdersCounter>
          <span>Всего пицц: {` ${counter} шт.`}</span>
        </BusketOrdersCounter>
        <BusketOrdersValue>
          Сумма заказа: <span>{`${counter} грн`}</span>
        </BusketOrdersValue>
      </BusketOrdersInfo>
      <BusketButtons>
        <Button
          title="Вернуться назад"
          color="#D3D3D3"
          borderSize="2px"
          borderColor="#D3D3D3"
          height="auto"
          radius="30px"
        />
        <Button
          title="Оплатить сейчас"
          color="#fff"
          bg="#FE5F1E"
          borderSize="2px"
          radius="30px"
        />
      </BusketButtons>
    </BusketWrapper>
  );
};

export default BusketList;
