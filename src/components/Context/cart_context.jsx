import { createContext, useReducer } from "react";
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
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, amount, singleProduct },
    });
  };
  return (
    <cart_context.Provider value={{ ...state, cartadd }}>
      {children}
    </cart_context.Provider>
  );
};

const useCartContext = () => {
  return useContext(cart_context);
};
export { cart_context, CartProvider, useCartContext };
