import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Button from "../../modules/Button/Button";

import { UIWrapper, UIContent } from "../../UI/UI";

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

const LocationIcon = styled.img.attrs((props) => ({
  src: props.url,
}))`
  height: 40px;
  width: 40px;
  margin-bottom: 16px;
`;

const LocationText = styled.p`
  font-weight: 700;
  font-size: 21px;
  margin-bottom: 25px;
`;

const LocationButton = styled.div``;

const Location = () => {
  return (
    <>
      <UIWrapper>
        <UIContent>
          <LocationWrapper>
            <LocationWrapperBg url={require("../../assets/bg.png")} />
            <LocationContent>
              <LocationIcon url={require("../../assets/icon/radar.svg")} />
              <LocationText>
                Enable your location <br /> for easily connect with us
              </LocationText>
              <LocationButton>
                <Button title="Enable now" />
              </LocationButton>
            </LocationContent>
          </LocationWrapper>
        </UIContent>
      </UIWrapper>
    </>
  );
};

export default Location;
