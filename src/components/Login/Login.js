import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Input from "../../modules/Input/Input";
import Button from "../../modules/Button/Button";
import ButtonCustom from "../../modules/ButtonCustom/ButtonCustom";
import Conversation from "../../modules/Conversation/Conversation";

import { UIWrapper, UIContent } from "../../UI/UI";

import test from "../../assets/test.png";
import { useHistory } from "react-router-dom";

const LoginW = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  margin-right: 8px;
  flex: 1;

  &:nth-child(2) {
    margin-right: 0;
    margin-top: 370px;
  }
`;

const LoginWrapper = styled.div`
  background: #fff;
  height: 400px;
  width: 400px;
  border-radius: 9%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${(props) => props.bg}) 100% 50% no-repeat;
  background-size: cover;
  position: relative;
`;

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  padding: 20px;
  border-radius: 40px;
  box-shadow: 0 0 22px #dfc6c6;
`;

const LoginLabel = styled.label`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const LoginLogo = styled.img.attrs((props) => ({
  src: props.url,
}))`
  height: 100px;
  width: 100px;
  margin-bottom: 27px;
`;

const LoginButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginButton = styled.button`
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  color: #588f5c;
  border-bottom: 1px solid #474768;
  margin-top: 20px;
`;

const Login = () => {
  const [data, setData] = useState({
    number: null,
  });

  const history = useHistory();

  const login = () => {
    history.push("/list");
  };

  const registration = () => {
    history.push("/registration");
  };

  return (
    <LoginW>
      <LoginStyles>
        <UIWrapper borderColor="#fff">
          <UIContent>
            <LoginWrapper
              bg={require("../../assets/1-min-r.jpg")}
            ></LoginWrapper>
          </UIContent>
        </UIWrapper>
      </LoginStyles>
      <LoginStyles>
        <UIWrapper borderColor="#fff">
          <LoginWrapper bg={require("../../assets/1-min.jpg")}></LoginWrapper>
        </UIWrapper>
      </LoginStyles>
      <LoginContent>
        <LoginLogo url={test} />
        {Object.keys(data).map((item) => (
          <LoginLabel key={item}>
            <Input
              type="tel"
              name={item}
              placeholder={item === "number" ? "Номер телефона" : item}
            />
          </LoginLabel>
        ))}
        <LoginButtonWrapper>
          <Button title="Войти" onClick={login} />
          <LoginButton onClick={registration}>Создать аккаунт</LoginButton>
        </LoginButtonWrapper>
      </LoginContent>
    </LoginW>
  );
};

export default Login;
