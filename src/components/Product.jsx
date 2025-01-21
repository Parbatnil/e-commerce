import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "./Helper/FormatPrice";

const Product = ({ id, name, price, image, category }) => {
  return (
    <div>
      <div className="p-4">
        <NavLink to={`/singleproduct/${id}`} className="group block">
          <div className="card bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover group-hover:opacity-90"
              />
            </div>

            {/* Product Info Section */}
            <div className="p-4">
              {/* Product Category */}
              <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                {category}
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-800 truncate group-hover:text-violet-700">
                {name}
              </h3>

              {/* Product Price */}
              <div className="mt-3 flex justify-between items-center">
                <div className="text-sm font-medium text-gray-600">Price:</div>
                <div className="text-xl font-bold text-violet-700 hover:text-violet-800 ">
                  {<FormatPrice price={price} />}
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Product;
