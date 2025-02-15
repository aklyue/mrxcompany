import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  cartQuantity: 0,
};

const calculateTotalPrice = (products) => {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (p) => p.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = calculateTotalPrice(state.products);
      state.cartQuantity += 1;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const productToRemove = state.products.find((p) => p.id === productId);

      if (productToRemove) {
        state.cartQuantity -= productToRemove.quantity;
        state.totalPrice -= productToRemove.price * productToRemove.quantity;
        state.products = state.products.filter((p) => p.id !== productId);
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.quantity += 1;
        state.totalPrice = calculateTotalPrice(state.products);
        state.cartQuantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
          state.totalPrice -= product.price;
          state.cartQuantity -= 1;
        } else {
          state.products = state.products.filter(
            (p) => p.id !== action.payload
          );
          state.totalPrice -= product.price;
          state.cartQuantity -= 1;
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
