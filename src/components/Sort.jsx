import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgMenuGridR } from "react-icons/cg";
import { useFilterContext } from "./Context/filterContext";
const Sort = () => {
  const { box_view, setBoxView, setListView, filter_products, sorting } =
    useFilterContext();
  return (
    <div className="flex items-center justify-between">
      <div className="flex space-x-4">
        <span>
          <RxHamburgerMenu
            onClick={setListView}
            className={
              box_view === true ? " text-black p-2" : "bg-black text-white p-2"
            }
            size={40}
          />
        </span>
        <span>
          <CgMenuGridR
            onClick={setBoxView}
            className={
              box_view !== true ? " text-black p-2" : "bg-black text-white p-2"
            }
            size={40}
          />
        </span>
      </div>
      <div>{filter_products.length} total Products</div>
      <div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            onClick={sorting}
            name="sort"
            id="sort"
            className=" text-gray-700 p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="lowest">Prize (lowest)</option>
            <option value="highest">Prize (highest)</option>
            <option value="a-z">Prize (A-Z)</option>
            <option value="z-a">Prize (Z-A)</option>
          </select>

          {/* <select
            name="prize"
            id="price"
            className=" text-gray-700 p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="sort">Sort</option>
            <option value="Prize(highest)">Prize (highest)</option>
            <option value="Prize(lowest)">Prize (lowest)</option>
            <option value="Prize(a-z)">Prize (A-Z)</option>
            <option value="prize(z-a)">Prize (Z-A)</option>
          </select> */}
        </form>
      </div>
    </div>
  );
};

export default Sort;
