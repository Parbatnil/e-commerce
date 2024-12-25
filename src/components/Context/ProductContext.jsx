import axios from "axios";
import React, { useContext, createContext, useEffect, useReducer } from "react";
import reducer from "../../reducer/productReducer";

const Appcontext = createContext(); // Create Context

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  isSingleError: false,
  singleProduct: {},
};
// Define Provider Component
const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //2nd api  call for individual Products
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <Appcontext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </Appcontext.Provider>
  );
};

// Custom Hook for using Context
const useProductContext = () => {
  return useContext(Appcontext);
};

export { ProductContext, useProductContext }; // Named Exports
