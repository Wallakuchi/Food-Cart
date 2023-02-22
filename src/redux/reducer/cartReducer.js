import { BUY_CART } from "../action/buyCart";

const initialState = {};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CART:
      return { data: [...action.payload] };
    default:
      return state;
  }
};
