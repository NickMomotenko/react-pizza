import React from "react";

import styled from "styled-components";

const SubTitleWrapper = styled.div`
  font-family: "Kaushan Script", cursive;
  font-size: 120px;
  color: #fed2d273;
  font-weight: 700;
  -webkit-transform: skewY(-11.5deg);
  -ms-transform: skewY(-11.5deg);
  transform: skewY(-11.5deg);
  text-shadow: 6px 0 0 #7c9d7e;
`;

const SubTitle = ({ label }) => {
  return <SubTitleWrapper>{label}</SubTitleWrapper>;
};

export default SubTitle;
