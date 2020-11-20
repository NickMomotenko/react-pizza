import React, { useState, useEffect } from "react";

import styled from "styled-components";

import { Route, useHistory } from "react-router-dom";

import Input from "../../modules/Input/Input";
import Button from "../../modules/Button/Button";
import ButtonCustom from "../../modules/ButtonCustom/ButtonCustom";
import Conversation from "../../modules/Conversation/Conversation";

import Location from "../Location/Location";

import { UIWrapper, UIContent } from "../../UI/UI";

import test from "../../assets/test.png";

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

const LoginInputs = styled.div`
  margin-bottom: 20px;

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
`;

const LoginButton = styled.div`
  text-align: center;
`;

const Login = () => {
  const [data, setData] = useState({
    number: null,
    name: "",
  });

  const [step, setStep] = useState(1);

  const inputsBlock = React.useRef(null);

  const history = useHistory();

  const defaultPath = "/registration";

  useEffect(() => {
    setTimeout(() => {
      history.push(`${defaultPath}/${step}`);
    }, 0);
  }, []);

  useEffect(() => {
    if (step == 2) {
      tranformInputsBlock();
    }
  }, [step]);

  const onClick = () => {
    const { location } = history;

    if (location.pathname == `${defaultPath}/1`) {
      setTimeout(() => {
        setStep(step + 1);
      }, 0);
      history.push(`${defaultPath}/2`);
    }

    if (location.pathname == `${defaultPath}/2`) {
      setTimeout(() => {
        setStep(step + 1);
      }, 0);

      history.push(`${defaultPath}/3`);
    }
  };

  const tranformInputsBlock = () => {
    inputsBlock.current.style.transform = `translateX(-100%)`;
  };

  const renderRegTitle = (text) => {
    return `${text}`;
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
        {step <= 2 ? (
          <LoginInputs>
            <LoginRow ref={inputsBlock}>
              {Object.keys(data).map((item) => (
                <Input
                  key={item}
                  type="tel"
                  name={item}
                  placeholder={
                    item == "number" ? "Твой номер телефона" : "Твое имя"
                  }
                />
              ))}
            </LoginRow>
          </LoginInputs>
        ) : (
          <Location />
        )}
        {step !== 3 ? (
          <LoginButton>
            <Button title="Далее" onClick={onClick} />
          </LoginButton>
        ) : (
          <></>
        )}
      </LoginContent>
    </LoginW>
  );
};

export default Login;
