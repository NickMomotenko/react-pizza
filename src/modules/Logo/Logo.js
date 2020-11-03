import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const LogoStyle = styled.div``;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img.attrs((props) => ({
  src: props.url,
}))`
  flex-shrink: 0;
`;

const LogoDesc = styled.div`
  margin-left: 10px;
`;

const LogoMain = styled.span`
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  color: #181818;
`;

const LogoText = styled.span`
  font-size: 16px;
  line-height: 19px;

  color: #7b7b7b;
`;

const Logo = () => {
  return (
    <LogoStyle>
      <LogoLink to="/">
        <LogoImg url={require("../../assets/test.png")} />
        <LogoDesc>
          <LogoMain>React Pizza</LogoMain>
          <LogoText>самая вкусная пицца во вселенной</LogoText>
        </LogoDesc>
      </LogoLink>
    </LogoStyle>
  );
};

export default Logo;
