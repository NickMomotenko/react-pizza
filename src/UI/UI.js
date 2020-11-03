import React from "react";

import styled from "styled-components";

const UIWrapperStyles = styled.div`
  display: inline-flex;
  background-color: transparent;
  border: 1px solid ${(props) => props.borderColor || "#e6e6e6"};
  padding: 10px;
  border-radius: 42px;
`;

const UIContentStyles = styled.div`
  display: inline-flex;
  background-color: #ffffffe8;
  border-radius: 33px;
  padding: 13px;
  box-shadow: 0 0 5px #eceaea;
`;

export const UIWrapper = ({ children, borderColor }) => {
  return <UIWrapperStyles borderColor={borderColor}>{children}</UIWrapperStyles>;
};

export const UIContent = ({ children }) => {
  return <UIContentStyles>{children}</UIContentStyles>;
};
