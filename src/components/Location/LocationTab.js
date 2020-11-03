import React from "react";

import styled from "styled-components";

import { UIWrapper, UIContent } from "../../UI/UI";

import test from "../../assets/map/1.jpg";

const LocationTabWrapper = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 31px;
  overflow: hidden;
  position: relative;
`;

const LocationTabImg = styled.img.attrs((props) => ({
  src: props.url,
}))`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const LocationTabBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: inline-block;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #fff;
`;

const LocationTabIcon = styled.img.attrs((props) => ({
  src: props.url,
}))`
  display: inline-block;
  height: 20px;
  width: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LocationTab = () => {
  return (
    <UIWrapper>
      <LocationTabWrapper>
        <LocationTabImg url={require("../../assets/map/1.jpg")} />
        <LocationTabBlock>
          <LocationTabIcon
            url={require("../../assets/icon/placeholder.svg")}
          />
        </LocationTabBlock>
      </LocationTabWrapper>
    </UIWrapper>
  );
};

export default LocationTab;
