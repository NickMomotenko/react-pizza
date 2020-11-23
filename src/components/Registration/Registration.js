import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { useForm } from "react-hook-form";

import Input from "../../modules/Input/Input";
import Button from "../../modules/Button/Button";
import Location from "../Location/Location";

import { UIWrapper, UIContent } from "../../UI/UI";

import test from "../../assets/test.png";
import { useData } from "../../hooks/userData";

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

const LoginContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const LoginLogo = styled.img.attrs((props) => ({
  src: props.url,
}))`
  height: 100px;
  width: 100px;
  margin-bottom: 27px;
`;

const LoginInputs = styled.div`
  overflow: hidden;
  max-width: 220px;
  * {
    transition: 0.5s;
  }

  div {
    max-width: 100%;
    padding-right: 10px;

    &:last-child {
      padding-right: 0;
    }
  }
`;

const LoginRow = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: 0.3s;

  opacity: ${(props) => (props.visible ? 0 : 1)};
  height: ${(props) => (props.visible ? "0" : "initial")};
`;

const LoginButton = styled.div`
  text-align: center;
`;

const LoginMainContent = styled.div``;

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { register, handleSubmit } = useForm();

  const { setValues } = useData();

  const registration = (data) => {
    if (!data) return;

    if (data) {
      setValues(data);

      setTimeout(() => {
        setIsVisible(true);
      }, 200);
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
      <LoginContent onSubmit={handleSubmit(registration)}>
        <LoginLogo url={test} />
        <LoginMainContent>
          <LoginBlock visible={isVisible}>
            <LoginInputs>
              <LoginRow>
                <Input
                  ref={register({ required: true })}
                  type="tel"
                  name="number"
                  placeholder="Твой номер телефона"
                />
                <Input
                  ref={register({ required: true })}
                  name="name"
                  placeholder="Твое имя"
                />
              </LoginRow>
            </LoginInputs>
            <LoginButton>
              <Button title="Далее" type="submit" />
            </LoginButton>
          </LoginBlock>
          {/* <Location visible={isVisible} /> */}
          {isVisible && <Location visible={isVisible} />}
        </LoginMainContent>
      </LoginContent>
    </LoginW>
  );
};

export default Login;
