import React from "react";
import { useFilterContext } from "./Context/filterContext";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import FormatPrice from "./Helper/FormatPrice";
import { FcClearFilters } from "react-icons/fc";
const FilterSection = () => {
  const {
    updateFilterValue,
    all_products,
    clearFilters,
    filters: { text, category, company, colors, price, maxPrice, minPrice },
  } = useFilterContext();

  // TO GET UNIQUE DATA OF EACH FIELD
  const getUniquedata = (items, value) => {
    let newVal = items.map((item) => item[value]);
    if (value === "colors") {
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };

  //unique data
  const categoryOnlyData = getUniquedata(all_products, "category");
  const companyOnlyData = getUniquedata(all_products, "company");
  const colorsData = getUniquedata(all_products, "colors");
  console.log("colorsData", colorsData);
  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={updateFilterValue}
            className="p-1 md:p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="mt-4 md:mt-1 flex flex-col space-y-1 md:space-y-2">
        <h4>Category</h4>
        <div>
          {categoryOnlyData.map((item, index) => {
            return (
              <button
                key={index}
                typeof="button"
                name="category"
                onClick={updateFilterValue}
                value={item}
                className="p-2 text-xs md:text-md rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                {item}
              </button>
            );
          })}
        </div>
        <div>
          <h4>Company</h4>
          <select
            name="company"
            onChange={updateFilterValue}
            className="p-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 text-xs md:text-md"
          >
            {companyOnlyData.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item}
                  name="company"
                  className="text-xs md:text-md"
                >
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h3>Colors</h3>
          <div className="flex flex-wrap space-x-2">
            {colorsData.map((item, index) => {
              if (item === "all") {
                return (
                  <button
                    key={index}
                    typeof="button"
                    name="colors"
                    onClick={updateFilterValue}
                    value={item}
                    className="p-2 text-xs md:text-md rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    {item}
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  typeof="button"
                  name="colors"
                  onClick={updateFilterValue}
                  value={item}
                  className="flex items-center justify-center transition-transform transform hover:scale-110 cursor-pointer"
                  style={{
                    backgroundColor: item,
                    border:
                      colors === item ? "2px solid #000" : "1px solid #ccc",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                >
                  {colors === item ? (
                    <FaCheck className="text-white text-sm" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <h3>Price</h3>
          <div>
            <p>
              <FormatPrice price={price} />
            </p>
            <input
              type="range"
              value={price}
              onChange={updateFilterValue}
              name="price"
              id=""
              min={minPrice}
              max={maxPrice}
              step={100}
            />
          </div>
        </div>
        <div>
          <button
            className="bg-pink-500 text-white px-4 py-3 rounded-sm font-bold hover:bg-violet-400"
            onClick={clearFilters}
          >
            Clear Filter{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
