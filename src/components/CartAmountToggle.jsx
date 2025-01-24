import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const CartAmountToggle = ({
  id,
  color,
  amount,
  setDecrease,
  setIncrease,
  singleProduct,
}) => {
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
      <div>
        <NavLink to="/cart">
          <button
            className="bg-violet-500 text-white px-4 py-3 rounded-sm font-bold hover:bg-violet-400"
            onClick={() => cartadd(id, color, amount, singleProduct)}
          >
            Add to cart
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CartAmountToggle;
