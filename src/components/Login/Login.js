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

const LoginButton = styled.div`
  text-align: center;
`;

const Login = () => {
  const [data, setData] = useState({
    number: null,
  });

  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push(`${history.location.pathname}/phone`);
    }, 3500);
  }, []);

  const onClick = () => {
    const { location } = history;

    if (location.pathname == "/login") {
      history.push(`/login/phone`);
    }

    if (location.pathname == "/login/phone") {
      history.push(`/login/name`);
    }

    if(location.pathname == '/login/name'){
      history.push(`/`);

    }
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
        <Conversation />
        {Object.keys(data).map((item) => (
          <LoginLabel key={item}>
            <Input type="tel" name={item} placeholder={item} />
          </LoginLabel>
        ))}
        <LoginButton>
          <Button title="LOGIN" onClick={onClick} />
        </LoginButton>
      </LoginContent>
    </LoginW>
  );
};

export default Login;
