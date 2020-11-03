import { ADD_ORDER, DELETE_ORDER } from "./types";

const initialState = {
  orders: [],
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: [
          ...state.orders.filter((order) => order.id != action.payload),
        ],
      };
    default:
      return state;
  }
};
