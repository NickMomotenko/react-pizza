import React from "react";

import styled from "styled-components";

import test from "../../assets/icon/loupe.svg";

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const InputStyles = styled.input`
  box-shadow: 0 0 5px #eceaea;
  padding: 10px 20px;
  padding-right: 30px;
  border-radius: 10px;
  color: #b6a4a4;

  &::placeholder {
    color: #b6a4a4;
    font-weight: 700;
  }
`;

const InputIcon = styled.img.attrs((props) => ({
  src: props.url,
}))`
  display: inline-block;
  height: 15px;
  width: 15px;
  cursor: pointer;

  position: absolute;
  right: 9px;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = (props) => {
  return (
    <InputWrapper>
      <InputStyles
        type={props.type ? props.type : "text"}
        name={props.name}
        placeholder={props.placeholder}
        required
      />
      {props.name == "search" && <InputIcon url={test} />}
    </InputWrapper>
  );
};

export default Input;
