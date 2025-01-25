import React from "react";
import { useCartContext } from "./components/Context/cart_context";
import { MdDelete } from "react-icons/md";
import FormatPrice from "./components/Helper/FormatPrice";
import CartAmountToggle from "./components/CartAmountToggle";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeItem,
    clearCart,
    setDecrease,
    setIncrease,
    shipping_fee,
    total_amount,
  } = useCartContext();

  return (
    <div className="min-h-screen">
      <div className="mt-10 mx-4 md:mx-20 mb-2 border-b-2">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b-2 pb-4 mb-4">
          <h5 className="font-bold w-1/5 text-center md:text-left text-sm md:text-base">
            ITEM
          </h5>
          <h5 className="font-bold w-1/5 text-center md:text-left hidden md:block text-sm md:text-base">
            PRICE
          </h5>
          <h5 className="font-bold w-1/5 text-center md:text-left text-sm md:text-base">
            QUANTITY
          </h5>
          <h5 className="font-bold w-1/5 text-center md:text-left hidden md:block text-sm md:text-base">
            SUBTOTAL
          </h5>
          <h5 className="font-bold w-1/5 text-center md:text-left text-sm md:text-base">
            REMOVE
          </h5>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center  py-4"
            >
              {/* Item */}
              <div className="flex flex-col md:flex-row space-x-1 w-1/5 items-center justify-center md:justify-start">
                <img
                  src={
                    item.image ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                  }
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  alt={item.name}
                />
                <div className="flex flex-col">
                  <h5 className="font-semibold  text-xs md:text-base">
                    {item.name}
                  </h5>
                  <p className="text-xs md:text-sm mx-1">
                    Color:
                    <span
                      className="inline-block w-2 h-2 md:w-4 md:h-4 rounded-full border"
                      style={{ backgroundColor: item.color || "#426cf5" }}
                    ></span>
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="w-1/5 hidden md:block">
                <FormatPrice price={item.price} />
              </div>

              {/* Quantity */}
              <div className="w-1/5 md:text-left text-center text-xs md:text-base">
                <CartAmountToggle
                  id={item.id}
                  color={item.color}
                  amount={item.amount}
                  setDecrease={() => setDecrease(item.id)}
                  setIncrease={() => setIncrease(item.id)}
                  singleProduct={item}
                />
              </div>

              {/* Subtotal */}
              <div className="w-1/5 hidden md:block">
                <FormatPrice price={item.price * item.amount} />
              </div>

              {/* Remove Button */}
              <div className="w-1/5 text-center md:text-left">
                <button
                  className="text-red-500 text-sm md:text-base"
                  onClick={() => {
                    removeItem(item.id);
                  }}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-lg font-semibold text-gray-500">
            Your cart is empty.
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="flex justify-between items-center mx-4 md:mx-20 mt-4">
          <NavLink to="/products">
            <button className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-sm font-semibold hover:bg-violet-400">
              Continue Shopping
            </button>
          </NavLink>
          <NavLink>
            <button
              onClick={clearCart}
              className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-sm font-bold hover:bg-violet-400"
            >
              Clear Cart
            </button>
          </NavLink>
        </div>
      )}
      {cart.length > 0 && (
        <div className="flex justify-end items-end  mx-4 md:mx-20 mt-10 ">
          <div className="bg-green-400 p-10">
            <div>
              <h5 className="font-bold text-sm md:text-base">
                Sub Total:
                <span className="ml-2">
                  <FormatPrice price={total_amount} />
                </span>
              </h5>
            </div>
            <div>
              {" "}
              <h5 className="font-bold text-sm md:text-base">
                Shipping fees:
                <span className="ml-2">
                  <FormatPrice price={shipping_fee} />
                </span>
              </h5>
            </div>
            <div>
              <h5 className="font-bold text-sm md:text-base border-t-2 mt-4 border-black">
                Order total :
                <span className="ml-2">
                  <FormatPrice price={shipping_fee + total_amount} />
                </span>
              </h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
