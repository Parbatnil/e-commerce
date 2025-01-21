import React from "react";
import BoxView from "./components/BoxView";
import ListView from "./components/ListView";
import { useFilterContext } from "./components/Context/FilterContext.jsx";

const ProductList = () => {
  useFilterContext;
  const { filter_products, box_view } = useFilterContext();
  if (box_view === true) {
    return <BoxView products={filter_products} />;
  }
  if (box_view === false) {
    return <ListView products={filter_products} />;
  }
  return null;
};

export default ProductList;
