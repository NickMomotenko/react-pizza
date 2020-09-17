import React from "react";

import styled from "styled-components";

import Button from "../../modules/Button/Button";

const TemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TemplateTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.01em;
  margin-bottom: 10px;

  color: #000000;
`;
const TemplateText = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 145.4%;

  letter-spacing: 0.01em;

  color: #777777;
  margin-bottom: 45px;
`;

const TemplateImgWrapper = styled.div`
  margin-bottom: 40px;
`;

const TemplateImg = styled.img.attrs((props) => ({
  src: props.url,
}))``;

const BusketTemplate = () => {
  return (
    <TemplateWrapper>
      <TemplateTitle>Корзина пустая 😕</TemplateTitle>
      <TemplateText>
        Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того, чтобы
        заказать пиццу, перейди на главную страницу
      </TemplateText>
      <TemplateImgWrapper>
        <TemplateImg url={require("../../assets/busket-img.png")}></TemplateImg>
      </TemplateImgWrapper>
      <Button title="Вернуться назад" />
    </TemplateWrapper>
  );
};

export default BusketTemplate;
