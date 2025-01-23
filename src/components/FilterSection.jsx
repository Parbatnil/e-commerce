import React from "react";
import { useFilterContext } from "./Context/filterContext";

const FilterSection = () => {
  const {
    updateFilterValue,
    all_products,
    filters: { text, category, company },
  } = useFilterContext();

  // TO GET UNIQUE DATA OF EACH FIELD
  const getUniquedata = (items, value) => {
    let newVal = items.map((item) => item[value]);

    return (newVal = ["all", ...new Set(newVal)]);
  };

  //unique data
  const categoryOnlyData = getUniquedata(all_products, "category");
  const companyOnlyData = getUniquedata(all_products, "company");
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
      </div>
    </div>
  );
};

export default FilterSection;
