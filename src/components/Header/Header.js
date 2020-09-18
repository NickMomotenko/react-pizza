import React from "react";

import Logo from "../../modules/Logo/Logo";
import Busket from "../../modules/Busket/Busket";
import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
  margin-bottom: 60px;
  border-bottom: 1px solid #f7f7f7;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <Busket price={500} counter={0} />
    </HeaderStyle>
  );
};

export default Header;
