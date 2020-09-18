import React from "react";

import styled from "styled-components";

const FilterItem = styled.li`
  padding: 10px;
  letter-spacing: 0.015em;
  font-size: 14px;
  color: ${({ item, activeFilter }) =>
    item == activeFilter ? "#fe5f1e" : "#000000"};
  transition: 0.3s;
  cursor: pointer;
  background: ${({ item, activeFilter }) =>
    item == activeFilter && "rgba(254, 95, 30, 0.05)"};

  &:hover {
    background: rgba(254, 95, 30, 0.05);
    color: #fe5f1e;
  }
`;

const SortFilterItem = ({ item, activeFilter, onClick }) => {
  return (
    <FilterItem
      item={item}
      activeFilter={activeFilter}
      onClick={() => onClick(item)}
    >
      {item}
    </FilterItem>
  );
};

export default SortFilterItem;
