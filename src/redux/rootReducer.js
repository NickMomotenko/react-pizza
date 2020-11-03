import { combineReducers } from "redux";

import { ordersReducer } from "./orders/ordersReducer";

export const rootReducer = combineReducers({
  orders: ordersReducer,
});
