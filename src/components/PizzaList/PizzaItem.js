import React, { useState } from "react";

import classNames from "classnames";

import Button from "../../modules/Button/Button";

const PizzaItem = ({ name, options, img }) => {
  const [pizzaSize, setPizzaSize] = useState(options.size[0]);
  const [pizzaDough, setPizzaDough] = useState(options.dough[0]);
  const [pizzaCounter, setPizzaCounter] = useState(0);

  return (
    <li className="pizza__item">
      <div className="pizza__img">
        <img src={img} alt="Pizza image" className="pizza__img-icon" />
      </div>
      <div className="pizza__info">
        <div className="pizza__name">{name}</div>
        <div className="pizza__options">
          <div className="pizza__options-row">
            {options.dough.map((item) => (
              <div
                key={item}
                className={classNames("pizza__options-button", {
                  "pizza__options-button--active": item === pizzaDough,
                })}
                onClick={() => setPizzaDough(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="pizza__options-row">
            {options.size.map((item) => (
              <div
                key={item}
                className={classNames("pizza__options-button", {
                  "pizza__options-button--active": item === pizzaSize,
                })}
                onClick={() => setPizzaSize(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="pizza__order">
          <div className="pizza__order-price">
            от <span className="pizza__order-price-value">395</span>
            <span className="pizza__order-price-currency">грн</span>
          </div>
          <Button
            title="Добавить"
            counter={pizzaCounter}
            onClick={() => setPizzaCounter(pizzaCounter + 1)}
            order
          />
        </div>
      </div>
    </li>
  );
};

export default PizzaItem;
