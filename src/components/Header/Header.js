import React from "react";

import Logo from "../../modules/Logo/Logo";
import Busket from "../../modules/Busket/Busket";
import styled from "styled-components";

// import "./Header.scss";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
