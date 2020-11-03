import React, { useState, useRef, useEffect } from "react";

import styled, { keyframes } from "styled-components";

import eatIcon from "../../assets/order/o-1.svg";
import timeIcon from "../../assets/order/clock-2.svg";
import markIcon from "../../assets/order/correct-mark.svg";

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  height: 45px;
  width: 170px;
  box-shadow: 0 0 15px #fbaf03;
  transition: 0.3s;

  * {
    transition: opacity 0.4s;
  }
`;

const ButtonText = styled.span`
  display: inline-flex;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;
  padding: 0 13px;
  white-space: nowrap;

  color: ${(props) => props.color || "black"};
`;

const ButtonIconWrapper = styled.div`
  background: #fbaf03;
  height: 100%;
  min-width: 35%;
  position: relative;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonIcon = styled.img.attrs((props) => ({
  src: props.url,
}))`
  width: 32px;
  height: 32px;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const ButtonIconTime = styled.img.attrs((props) => ({
  src: props.url,
}))`
  display: inline-flex;
  width: 32px;
  height: 32px;
  opacity: 0;
  animation: ${rotate} 2s linear infinite;
`;

const ButtonIconMark = styled(ButtonIcon)`
  opacity: 0;
  width: 20px;
  height: 20px;
`;

const OrderButton = ({ title }) => {
  const [isClicked, setIsClicked] = useState(false);

  const iconWrapperRef = useRef(null);
  const iconWRef = useRef(null);
  const iconRef = useRef(null);
  const iconTimeRef = useRef(null);
  const textRef = useRef(null);
  const iconCompRef = useRef(null);

  const transformButton = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        iconWRef.current.style.background = "#9b92ce";
        iconWrapperRef.current.style.boxShadow = "0 0 15px #9b92ce";
        iconWRef.current.style.minWidth = "100%";

        setTimeout(() => {
          iconRef.current.style.opacity = 0;

          setTimeout(() => {
            iconRef.current.style.visibility = "hidden";
            iconRef.current.style.width = 0;
            iconTimeRef.current.style.opacity = 1;
            resolve();
          }, 300);
        }, 300);
      }, 700);
    });
    promise.then(() => {
      setTimeout(() => {
        setTimeout(() => {
          iconTimeRef.current.style.visibility = "hidden";
          iconTimeRef.current.style.width = 0;

          setTimeout(() => {
            iconWRef.current.style.background = "green";
            iconWrapperRef.current.style.boxShadow = "0 0 15px green";

            setTimeout(() => {
              iconCompRef.current.style.opacity = 1;

              setTimeout(() => {
                iconCompRef.current.style.opacity = 0;
                iconCompRef.current.style.visibility = "hidden";

                setTimeout(() => {
                  textRef.current.innerText = "Заказ оформлен";
                  iconWRef.current.style.minWidth = "0%";
                  iconWrapperRef.current.style.justifyContent = "center";
                }, 500);
              }, 1000);
            }, 100);
          }, 200);
        }, 1000);
      }, 500);
    });
  };

  return (
    <ButtonWrapper ref={iconWrapperRef} onClick={transformButton}>
      <ButtonIconWrapper ref={iconWRef}>
        <ButtonIcon ref={iconRef} url={eatIcon} />
        <ButtonIconMark ref={iconCompRef} url={markIcon} />
        <ButtonIconTime ref={iconTimeRef} url={timeIcon} />
      </ButtonIconWrapper>
      <ButtonText ref={textRef}>{title}</ButtonText>
    </ButtonWrapper>
  );
};

export default OrderButton;
