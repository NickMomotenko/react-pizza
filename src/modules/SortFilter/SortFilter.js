import React, { useState } from "react";

import "./SortFilter.scss";

import classNames from "classnames";

const SortFilterItem = ({ item, activeFilter, onClick }) => {
  return (
    <li
      className={classNames("filter__item", {
        "filter__item--active": item == activeFilter,
      })}
      onClick={() => onClick(item)}
    >
      {item}
    </li>
  );
};

const SortFilter = () => {
  const filter = ["популярности", "цене", "алфавиту"];

  const [activeFilter, setActiveFilter] = useState(filter[0]);

  const [popup, setPopup] = useState(false);

  return (
    <div className="filter">
      <div className="filter__block">
        Сортировка по:{" "}
        <span className="filter__value">{`по ${activeFilter}`}</span>
      </div>
      {popup && (
        <ul className="filter__list" onMouseLeave={() => setPopup(false)}>
          {filter.map((item, index) => (
            <SortFilterItem
              key={`${item}-${index}`}
              activeFilter={activeFilter}
              item={item}
              onClick={setActiveFilter}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortFilter;
