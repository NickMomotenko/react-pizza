import React, { useState } from "react";

import "./Navigation.scss";

import classNames from "classnames";

const NavigationItem = ({ active, item, onClick }) => {
  return (
    <li
      className={classNames("menu__item", {
        "menu__item--active": item == active,
      })}
    >
      <a href="#" className="menu__link" onClick={() => onClick(item)}>
        {item}
      </a>
    </li>
  );
};

const Navigation = () => {
  const menu = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые"];
  const [active, setActive] = useState(menu[0]);

  return (
    <div className="menu">
      <ul className="menu__list">
        {menu.map((item, index) => (
          <NavigationItem
            key={`${item}-${index}`}
            active={active}
            onClick={setActive}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
