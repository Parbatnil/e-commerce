import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  box_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    colors: "all",
  },
};

const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //set box_view
  const setBoxView = () => {
    return dispatch({ type: "SET_BOX_VIEW" });
  };
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  const sorting = (event) => {
    let userValue = event.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setBoxView, setListView, sorting, updateFilterValue }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterContextProvider, useFilterContext };
