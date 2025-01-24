import { act } from "react";

// Code: This file will contain the reducer for the cart. It will contain the initial state of the cart and the actions that can be performed on the cart. The actions will be dispatched from the components and the reducer will update the state of the cart accordingly. The reducer will be used in the cart context to provide the state and actions to the components.
const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
  }
  return state;
};

export default cart_reducer;
