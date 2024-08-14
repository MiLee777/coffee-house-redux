import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart(state, action) {
      state.cartItems.push({
        id: action.payload.dish.id,
        quantity: action.payload.quantity,
      })
    }
  }
})

export const { addItemToCart } = cartSlice.actions;
export const getCartItems = state => state.cart.cartItems;
export default cartSlice.reducer;