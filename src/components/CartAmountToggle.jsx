import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./Context/cart_context";
const CartAmountToggle = ({
  id,
  color,
  amount,
  setDecrease,
  setIncrease,
  singleProduct,
}) => {
  const { cartadd } = useCartContext();

  return (
    <div>
      <div className=" flex space-x-9 py-3">
        <button onClick={setDecrease}>
          {" "}
          <FaMinus />
        </button>
        <div>{amount}</div>
        <button onClick={setIncrease}>
          {" "}
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
