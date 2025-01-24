import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgMenuGridR } from "react-icons/cg";
import { useFilterContext } from "./Context/filterContext";
const Sort = () => {
  const { box_view, setBoxView, setListView, filter_products, sorting } =
    useFilterContext();
  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-1  md:space-x-2">
        <span>
          <RxHamburgerMenu
            onClick={setListView}
            className={
              box_view === true
                ? " text-black p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
                : "bg-black text-white p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
            }
          />
        </span>
        <span>
          <CgMenuGridR
            onClick={setBoxView}
            className={
              box_view !== true
                ? " text-black p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
                : "bg-black text-white p-1 text-2xl sm:text-2xl md:text-3xl lg:text-4xl"
            }
          />
        </span>
      </div>
      <div>
        <p className="text-xs md:text-lg">
          {filter_products.length === 0
            ? "No Products"
            : filter_products.length + "total Products"}
        </p>
      </div>
      <div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            onClick={sorting}
            name="sort"
            id="sort"
            className=" text-xs md:text-sm lg:text-lg text-gray-700 p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="lowest">Price (lowest)</option>
            <option value="highest">Price (highest)</option>
            <option value="a-z">Sort by A-Z</option>
            <option value="z-a">Sort by Z-A</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
