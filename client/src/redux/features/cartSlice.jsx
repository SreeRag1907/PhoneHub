// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.model === action.payload.model
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity += 1;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.carts.push(newItem);
      }
      state.totalPrice = calculateTotalPrice(state.carts);
    },
    updateQuantity: (state, action) => {
      const { model, quantity } = action.payload;
      const itemIndex = state.carts.findIndex((item) => item.model === model);
      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity = quantity;
        state.totalPrice = calculateTotalPrice(state.carts);
      }
    },
    removeFromCart: (state, action) => {
      const model = action.payload;
      state.carts = state.carts.filter((item) => item.model !== model);
      state.totalPrice = calculateTotalPrice(state.carts);
    },

    emptyCartItem: (state, action) => {
      state.carts = [];
      state.totalPrice = 0;
    },
  },
});

const calculateTotalPrice = (carts) => {
  return carts.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace(/[$,]/g, ""));
    return total + itemPrice * item.quantity;
  }, 0);
};

export const { addToCart, updateQuantity, removeFromCart, emptyCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
