import { createContext, useContext, useReducer } from "react";
import reducer from "../../reducer/cart_reducer";
const cart_context = createContext();

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
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
  return (
    <cart_context.Provider value={{ ...state, cartadd, removeItem }}>
      {children}
    </cart_context.Provider>
  );
};

const useCartContext = () => {
  return useContext(cart_context);
};
export { cart_context, CartProvider, useCartContext };
