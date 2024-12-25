import React from "react";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div className="flex mx-44 space-x-4 my-4">
      <div className="bg-red-700 min-h-screen w-[20%] rounded-md">
        <FilterSection />
      </div>
      <div className="flex flex-col min h-screen w-[80%] rounded-md space-y-4">
        <div className="h-[13%] bg-green-500 rounded-md">
          <Sort />
        </div>
        <div className="h-[87%] bg-orange-600 rounded-md">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Products;
