import * as types from "./UserDataActionType.js";
const setproducts = localStorage.getItem("addToCart");
console.log(setproducts);

const initialState = {
  cartItems: setproducts
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload]
      };
    default:
      return state;
  }
};

// import * as types from "./UserDataActionType.js";

// const init = {
//   cart: []
// };

// const setAddToCart = localStorage.getItem("addToCart");
