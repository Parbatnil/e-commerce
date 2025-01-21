import React from "react";
import { useFilterContext } from "./components/Context/FilterContext";
import BoxView from "./components/BoxView";
import ListView from "./components/ListView";

const ProductList = () => {
  const { filter_products, box_view } = useFilterContext();
  if (box_view === true) {
    return <BoxView products={filter_products} />;
  } else if (box_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
