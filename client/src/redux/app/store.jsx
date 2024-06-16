import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice'; // Adjust the path accordingly

export const store = configureStore({
  reducer: {
    allCart: cartReducer // Use cartReducer directly here
  }
});
