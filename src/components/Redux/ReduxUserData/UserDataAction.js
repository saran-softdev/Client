import * as types from "./UserDataActionType";

export const addToCart = (products_id) => {
  // console.log(products_id);
  return {
    type: types.ADD_TO_CART,
    payload: products_id
  };
};

// import * as types from "./UserDataActionType";

// export const addToCart = (addToCart) => {
//   localStorage.setItem("addToCart", JSON.stringify(addToCart));

//   return {
//     type: types.ADD_TO_CART,
//     payload: addToCart
//   };
// };

// export const removeHandleDeclaration = (payload) => {
//   localStorage.removeItem("addToCart");
//   return {
//     type: types.REMOVE_FROM_CART,
//     payload
//   };
// };
