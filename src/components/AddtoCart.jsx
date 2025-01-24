import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ singleProduct }) => {
  const { id, colors, stock } = singleProduct;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <>
      <div className="flex space-x-6">
        <p className="text-lg font-semibold mb-4">Select a Color:</p>
        <div className="flex gap-4">
          {colors.map((curColor, index) => {
            return (
              <>
                <button
                  key={index}
                  style={{
                    backgroundColor: curColor,
                    border:
                      color === curColor ? "2px solid #000" : "1px solid #ccc",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                  className="flex items-center justify-center transition-transform transform hover:scale-110 cursor-pointer"
                  onClick={() => setColor(curColor)}
                >
                  {color === curColor ? (
                    <FaCheck className="text-white text-sm" />
                  ) : null}
                </button>
              </>
            );
          })}
        </div>
      </div>
      <div>
        <CartAmountToggle
          id={id}
          color={color}
          amount={amount}
          singleProduct={singleProduct}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>
    </>
  );
};

export default AddToCart;
