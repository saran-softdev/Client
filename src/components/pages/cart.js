// Cart.js
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartData);
  console.log(cartItems);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Cart;
