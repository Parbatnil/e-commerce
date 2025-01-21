import React from "react";
import Product from "./Product";

const BoxView = ({ products }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((curElem) => {
          return (
            <Product className="min-h-[200%]" key={curElem.id} {...curElem} />
          );
        })}
      </div>
    </div>
  );
};

export default BoxView;
