import React from "react";

import styled from "styled-components";

const TitleStyle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 0.01em;
  color: #000000;
`;

const Title = ({ title }) => <TitleStyle>{title}</TitleStyle>;

export default Title;
