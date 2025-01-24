import React from "react";
import FormatPrice from "./Helper/FormatPrice";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div className="space-y-4">
      {products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        return (
          <div
            key={id}
            className="flex flex-col md:flex-row items-center bg-slate-200 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow space-y-2 md:space-y-0 md:space-x-6"
          >
            <div className="w-full md:w-1/4">
              <img
                src={image}
                alt={name}
                className="rounded-md object-cover w-full h-48 md:h-32"
              />
            </div>
            <div className="w-full md:w-3/4 space-y-2">
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-gray-600">{description}</p>
              <div className="flex justify-between items-center">
                <FormatPrice price={price} />
                <NavLink
                  to={`/product/${id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
