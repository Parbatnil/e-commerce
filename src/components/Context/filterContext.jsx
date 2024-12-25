import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, []);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
