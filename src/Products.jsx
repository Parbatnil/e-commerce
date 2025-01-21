import React from "react";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-8 lg:mx-16 xl:mx-20 space-y-4 md:space-y-0 md:space-x-4 my-4">
      {/* Filter Section */}
      <div className="bg-red-700 min-h-screen w-full md:w-[25%] rounded-md p-4">
        <FilterSection />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col w-full  space-y-4">
        {/* Sort Section */}
        <div className="bg-violet-200 p-4 rounded-md">
          <Sort />
        </div>

        {/* Product List Section */}
        <div className="bg-violet-200 p-4 rounded-md">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Products;
