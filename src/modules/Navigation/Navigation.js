import React, { useState } from "react";

import styled from "styled-components";

import NavigationItem from "./NavigationItem";

const Menu = styled.nav``;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
`;

const Navigation = () => {
  const menu = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"];
  const [active, setActive] = useState(menu[0]);

  return (
    <Menu>
      <MenuList>
        {menu.map((item, index) => (
          <NavigationItem
            key={`${item}-${index}`}
            active={active}
            onClick={setActive}
            item={item}
          />
        ))}
      </MenuList>
    </Menu>
  );
};

export default Navigation;
