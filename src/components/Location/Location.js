import React from "react";

import styled, { keyframes, css } from "styled-components";

// import Button from "../../modules/Button/Button";

import { UIWrapper, UIContent } from "../../UI/UI";

import { useLocation } from "../../hooks/location";
import { Link } from "react-router-dom";

const LocationWrapperBlock = styled.div`
  transition-delay: 0.5s;
  transition: 0.5s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: ${(props) => (props.visible ? "initial" : "0")};
`;

const LocationWrapper = styled.div`
  min-width: 250px;
  max-width: 250px;
  text-align: center;
  position: relative;
  padding-top: 66px;
`;

const LocationWrapperBg = styled.img.attrs((props) => ({
  src: props.url,
}))`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`;

const LocationContent = styled.div`
  position: relative;
  z-index: 2;
`;

const LocationIcon = styled.img.attrs(({ url }) => ({
  src: url,
}))`
  height: 40px;
  width: 40px;
  margin-bottom: 16px;
  animation: ${(props) =>
    props.anim
      ? css`
          ${rotate} 2s linear infinite
        `
      : "none"};
`;

const LocationText = styled.p`
  font-weight: 700;
  font-size: 21px;
  margin-bottom: 25px;
`;

const LocationSubText = styled(LocationText)`
  font-weight: 400;
`;

const LocationButton = styled.button`
  background: transparent;
  border-bottom: 1px solid black;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Location = ({ visible }) => {
  const { isReady } = useLocation();

  return (
    <LocationWrapperBlock visible={visible}>
      <UIWrapper>
        <UIContent>
          <LocationWrapper>
            <LocationWrapperBg url={require("../../assets/bg.png")} />
            <LocationContent>
              <LocationText>
                Для корректной работы сервиса, нам нужна твоя геолокация
              </LocationText>
              <LocationIcon
                url={require("../../assets/icon/radar.svg")}
                anim={isReady}
              />
              <LocationSubText>
                {!isReady && "пытаюсь найти тебя..."}
              </LocationSubText>
            </LocationContent>
            <Link to="/list">
              <LocationButton>Найти меня позже</LocationButton>
            </Link>
          </LocationWrapper>
        </UIContent>
      </UIWrapper>
    </LocationWrapperBlock>
  );
};

export default Location;
