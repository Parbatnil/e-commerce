import React from "react";
import { useProductContext } from "./Context/ProductContext";
import { RotatingLines } from "react-loader-spinner";
import Product from "./Product";

const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <RotatingLines
          strokeColor="#7b2b8c"
          strokeWidth="5"
          animationDuration="0.75"
          width="80"
          visible={true}
        />
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center flex-col bg-violet-100 space-y-3 pb-32">
      <h5 className="text-sm py-4">CHECK NOW</h5>
      <h3 className="text-2xl">Our Feature Services</h3>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-4 grid-cols-1">
        {featureProducts.map((curElem) => {
          return <Product key={curElem.id} id={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
