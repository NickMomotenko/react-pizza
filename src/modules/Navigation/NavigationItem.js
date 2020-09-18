import React from "react";

import styled from "styled-components";

const MenuItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const MenuLink = styled.a`
  background-color: ${({ active, item }) =>
    item == active ? "#282828" : "#f9f9f9"};
  border-radius: 30px;
  padding: 13px 17px;
  letter-spacing: 0.015em;
  font-size: 16px;
  font-weight: 700;
  color: ${({ active, item }) => (item == active ? "#fff" : "#2c2c2c")};
  transition: 0.4s;

  &:hover {
    background-color: #282828;
    color: #fff;
  }
`;

const NavigationItem = ({ active, item, onClick }) => {
  return (
    <MenuItem>
      <MenuLink
        href="#"
        active={active}
        item={item}
        onClick={() => onClick(item)}
      >
        {item}
      </MenuLink>
    </MenuItem>
  );
};

export default NavigationItem;
