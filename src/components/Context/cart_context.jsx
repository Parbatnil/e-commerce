import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../../reducer/cart_reducer";
import { use } from "react";
const cart_context = createContext();

const initialState = {
  //cart: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 50000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const cartadd = (id, color, amount, singleProduct) => {
    console.log("hi->", singleProduct.image[0].url),
      dispatch({
        type: "ADD_TO_CART",
        payload: { id, color, amount, singleProduct },
      });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const setDecrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  //add data in  local Storage
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <cart_context.Provider
      value={{
        ...state,
        cartadd,
        removeItem,
        clearCart,
        setIncrease,
        setDecrease,
      }}
    >
      {children}
    </cart_context.Provider>
  );
};

const useCartContext = () => {
  return useContext(cart_context);
};
export { cart_context, CartProvider, useCartContext };
