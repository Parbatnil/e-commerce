import React from "react";
import FormatPrice from "./Helper/FormatPrice";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div className="space-y-5">
      {products.map((curElem) => {
        const { id, name, image, price, description } = curElem;
        return (
          <div
            key={id}
            className="flex flex-col md:flex-row items-center bg-slate-200 p-4 rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-6 hover:shadow-lg transition-shadow"
          >
            <div className="w-full md:w-1/4">
              <img
                src={image}
                alt={name}
                className="rounded-md object-cover w-full h-48 md:h-32"
              />
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {name}
              </h2>
              <h6 className="text-md md:text-lg font-bold text-violet-600 mb-2">
                <FormatPrice price={price} />
              </h6>
              <p className="text-gray-600 text-sm mb-4">
                {description.slice(0, 110)}...
              </p>
              <NavLink to={`/singleproduct/${id}`}>
                <button className="bg-violet-500 text-white px-4 py-2 md:py-3 rounded-sm hover:bg-violet-400 transition-colors">
                  READ MORE
                </button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
