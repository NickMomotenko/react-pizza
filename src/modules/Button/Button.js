import React from "react";

import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fbaf03;
  border-radius: 25px;
  padding: 10px 30px;
  box-shadow: 0 0 15px #fbaf03;
  transition: .3s;

  &:hover{
    background: #dd9f14;
    box-shadow: 0 0 15px #dd9f14;
  }
`;

const ButtonText = styled.span`
  display: inline-flex;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;

  color: ${(props) => props.color || "#fff"};
`;

const Button = ({ title }) => {
  return (
    <ButtonWrapper>
      <ButtonText>{title}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;
