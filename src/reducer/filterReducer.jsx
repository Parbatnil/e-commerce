const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((product) => product.price);
      console.log("priceArr", priceArr);
      let maxPrice = Math.max(...priceArr);
      console.log("maxPrice", maxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: action.payload,
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };
    case "SET_BOX_VIEW":
      return {
        ...state,
        box_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        box_view: false,
      };
    case "GET_SORT_VALUE":
      let sort_value = action.payload;

      return {
        ...state,
        sorting_value: sort_value,
      };
    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        } else if (state.sorting_value === "highest") {
          return b.price - a.price;
        } else if (state.sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        } else if (state.sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        } else {
          return a.price - b.price;
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let newFilterProducts = [...all_products];
      let { text, category, company, colors, price } = state.filters;

      if (text) {
        newFilterProducts = newFilterProducts.filter((product) => {
          return product.name.toLowerCase().includes(text.toLowerCase());
        });
      }

      if (category !== "all") {
        newFilterProducts = newFilterProducts.filter((product) => {
          return product.category === category;
        });
      }

      if (company !== "all") {
        newFilterProducts = newFilterProducts.filter((product) => {
          return product.company === company;
        });
      }

      if (colors !== "all") {
        newFilterProducts = newFilterProducts.filter((product) => {
          return product.colors.includes(colors);
        });
      }
      if (price === 0) {
        newFilterProducts = newFilterProducts.filter((product) => {
          return product.price == price;
        });
      } else {
        {
          newFilterProducts = newFilterProducts.filter((product) => {
            return product.price <= price;
          });
        }
      }

      return {
        ...state,
        filter_products: newFilterProducts,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          colors: "all",
          price: state.filters.maxPrice,
          maxPrice: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};

export default filterReducer;
