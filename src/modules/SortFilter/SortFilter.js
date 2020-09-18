import React, { useState } from "react";
import styled from "styled-components";

import SortFilterItem from "./SortFilterItem";

const Filter = styled.div`
  position: relative;
`;

const FilterBlock = styled.div`
  color: #2c2c2c;
  font-weight: 700;

  &::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 7px;
    background: url(../../assets/icon/triangle.svg) center no-repeat;
    transform: rotate(180deg);
    vertical-align: middle;
    margin-right: 7px;
    transition: 0.3s;
  }
`;

const FilterBlockValue = styled.span`
  letter-spacing: 0.015em;
  color: #fe5f1e;
  border-bottom: 1px solid #fe5f1e;
  cursor: pointer;
  min-width: 130px;

  &:hover {
    .filter__block {
      &::before {
        transform: rotate(190deg);
      }
    }
  }
`;

const FilterList = styled.ul`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  width: 130px;
  display: inline-block;
  padding: 13px 0;
  position: absolute;
  background: #fff;
  z-index: 2;
  right: 0;
  margin-top: 10px;
`;

const SortFilter = () => {
  const filter = ["популярности", "цене", "алфавиту"];

  const [activeFilter, setActiveFilter] = useState(filter[0]);

  const [popup, setPopup] = useState(false);

  return (
    <Filter>
      <FilterBlock>
        Сортировка по:{" "}
        <FilterBlockValue>{`по ${activeFilter}`}</FilterBlockValue>
      </FilterBlock>
      {popup && (
        <FilterList onMouseLeave={() => setPopup(false)}>
          {filter.map((item, index) => (
            <SortFilterItem
              key={`${item}-${index}`}
              activeFilter={activeFilter}
              item={item}
              onClick={setActiveFilter}
            />
          ))}
        </FilterList>
      )}
    </Filter>
  );
};

export default SortFilter;
