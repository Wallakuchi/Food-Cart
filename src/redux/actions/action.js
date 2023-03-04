export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
//To remove data
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

//To remove individual item
export const REMOVE = (item) => {
  return {
    type: "RMV_ONE",
    payload: item,
  };
};
