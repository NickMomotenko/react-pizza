import { ADD_ORDER , DELETE_ORDER } from "./types";

export function addOrder(order) {
  return {
    type: ADD_ORDER,
    payload: order,
  };
}

export function deleteOrder(id) {
    return {
      type: DELETE_ORDER,
      payload: id,
    };
  }
  
