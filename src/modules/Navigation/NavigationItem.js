import React from "react";

import styled from "styled-components";
import { UIContent, UIWrapper } from "../../UI/UI";

const MenuItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const MenuLink = styled.a`
  // border-radius: 30px;
  letter-spacing: 0.015em;
  font-size: 16px;
  font-weight: 700;
  // color: ${({ active, item }) => (item == active ? "#fff" : "#2c2c2c")};
  transition: 0.4s;

  &:hover {
    // background-color: #282828;
    // color: #fff;
  }
`;

const NavigationItem = ({ active, item, onClick }) => {
  return (
    <MenuItem>
      <UIWrapper>
        <UIContent>
          <MenuLink
            href="#"
            active={active}
            item={item}
            onClick={() => onClick(item)}
          >
            {item}
          </MenuLink>
        </UIContent>
      </UIWrapper>
    </MenuItem>
  );
};

export default NavigationItem;
