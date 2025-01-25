const cart_reducer = (state, action) => {
  // Handle "ADD_TO_CART" action
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, singleProduct } = action.payload;

    // Check if the product already exists in the cart
    const existingProduct = state.cart.find((item) => item.id === id + color);

    if (existingProduct) {
      // Update the quantity of the existing product
      const updatedCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          const newAmount = Math.min(cartItem.amount + amount, cartItem.max); // Ensure amount doesn't exceed stock
          return { ...cartItem, amount: newAmount };
        }
        return cartItem; // Return other cart items unchanged
      });
      return { ...state, cart: updatedCart };
    }

    // Ensure singleProduct exists before adding to the cart
    if (!singleProduct) {
      console.error("singleProduct is undefined or null.");
      return state; // Return current state if singleProduct is invalid
    }

    // Create a new product object to add to the cart
    const cartProduct = {
      id: id + color, // Unique ID based on product ID and color
      name: singleProduct.name || "Product Name", // Fallback if name is undefined
      color, // Selected color
      amount, // Quantity to add
      image: singleProduct.image[0]?.url || "", // Fallback if image URL is undefined
      price: singleProduct.price || 0, // Fallback if price is undefined
      max: singleProduct.stock || 0, // Fallback if stock is undefined
    };

    // Add the new product to the cart
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  // Handle "REMOVE_ITEM" action
  if (action.type === "REMOVE_ITEM") {
    const updatedCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // Handle "CLEAR_CART" action
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [], // Empty the cart
    };
  }

  // Handle "INCREASE" action
  if (action.type === "INCREASE") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        // Increase the amount, ensuring it doesn't exceed the maximum stock
        const newAmount = Math.min(item.amount + 1, item.max);
        return { ...item, amount: newAmount };
      }
      return item; // Return other items unchanged
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // Handle "DECREASE" action
  if (action.type === "DECREASE") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        // Decrease the amount, ensuring it doesn't go below 1
        const newAmount = Math.max(item.amount - 1, 1);
        return { ...item, amount: newAmount };
      }
      return item; // Return other items unchanged
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // Handle "CART_ITEM_PRICE_TOTAL" action
  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let { total_items, total_amount } = state.cart.reduce(
      (accum, curElem) => {
        let { price, amount } = curElem;
        let itemTotal = price * amount;
        accum.total_items += amount;
        accum.total_amount += itemTotal;
        return accum;
      },
      { total_items: 0, total_amount: 0 }
    );
    return {
      ...state,
      total_items,
      total_amount,
    };
  }

  // Return current state for unsupported actions
  return state;
};

export default cart_reducer;
