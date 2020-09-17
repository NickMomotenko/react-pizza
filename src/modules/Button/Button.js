import React from "react";

import classNames from "classnames";

import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: inline-block;
  background: ${({ bg }) => bg || "transparent"};
  border: ${({ borderSize, borderColor }) =>
    `${borderSize} solid ${borderColor}`};
  border-radius: ${(props) => props.radius || "30px"};
  padding: ${({ padding }) => padding || "14px 25px"};
  height: ${({ height }) => height || "auto"};
  width: ${({ height }) => height || "auto"};
`;

const ButtonText = styled.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: ${(props) => props.color || "#fff"};

  // &::before {
  //   content: "+";
  //   display: inline-block;
  //   font-size: 17px;
  //   color: #eb5a1e;
  //   vertical-align: middle;
  //   margin-right: 8px;
  // }
`;

const ButtonCounter = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  min-height: 22px;
  border-radius: 50%;
  margin-left: 7px;

  background: #eb5a1e;
`;

const ButtonCounterText = styled.span`
  color: #fff;
`;

const Button = ({
  title,
  counter,
  onClick,
  bg,
  color,
  borderSize,
  borderColor,
  radius,
  height,
  padding
}) => (
  <ButtonWrapper
    onClick={onClick}
    bg={bg}
    borderSize={borderSize}
    borderColor={borderColor}
    radius={radius}
    height={height}
    padding={padding}
  >
    <ButtonText color={color}>{title}</ButtonText>
    {/* <ButtonCounter>
      {counter && <ButtonCounterText>{counter}</ButtonCounterText>}
    </ButtonCounter> */}
  </ButtonWrapper>
);

export default Button;
