export const BUY_CART = "BUY_CART";

export const buyCart = (data) => {
  return {
    type: BUY_CART,
    payload: data,
  };
};
