import React from "react";

import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: ${({ bg }) => `${bg}`};
  box-shadow: 0 0 15px ${(props) => props.shadow};
  margin-right: 6px;
  transition: 0.3s;

  &:last-child {
    margin-right: 0;
    margin-left: 6px;
  }
`;

const ButtonLabel = styled.span`
  color: ${({ color }) => color};
  font-size: 20px;
`;

const ButtonCustom = ({ label, bg, color, shadow, onClick }) => {
  return (
    <ButtonWrapper bg={bg} shadow={shadow} onClick={onClick}>
      <ButtonLabel color={color}>{label}</ButtonLabel>
    </ButtonWrapper>
  );
};

export default ButtonCustom;
