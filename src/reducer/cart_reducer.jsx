const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, singleProduct } = action.payload;
    console.log("singleProduct in reducer:", singleProduct);

    // Guard clause to ensure singleProduct exists
    if (!singleProduct) {
      console.error("singleProduct is undefined or null.");
      return state; // Return current state if singleProduct is invalid
    }

    // Create the cart product
    let cartProduct = {
      id: id + color, // Unique ID based on product ID and color
      name:
        singleProduct.name?.length > 0 ? singleProduct.name : "Product Name", // Safe fallback for name
      color, // Product color
      amount, // Quantity to add
      image: singleProduct.image[0].url, // Safe fallback for image
      price: singleProduct.price ?? 0, // Default to 0 if price is undefined
      max: singleProduct.stock ?? 0, // Default to 0 if stock is undefined
    };

    console.log("Cart product:", cartProduct);

    // Add cart product to the cart
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  // Handle REMOVE_ITEM action
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // Return current state for unsupported actions
  return state;
};

export default cart_reducer;
