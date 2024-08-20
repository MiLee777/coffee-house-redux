import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const timeId = new Date().getTime();
      state.cartItems.push({
        timeId: timeId,
        id: action.payload.item.id,
        quantity: action.payload.quantity,
        totalPrice: action.payload.quantity * action.payload.item.price,
      })
    },

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.cartItemId
      )
    },

    clearCart: (state) => {
      state.cartItems = []
    }
  }
})

export const getTotalPrice = state => {
  return state.cart.cartItems.reduce((total, cartItem) => {
    return cartItem.totalPrice + total;
  }, 0);
}

export const getTotalQuantity = state => {
  return state.cart.cartItems.reduce((total, cartItem) => {
    return cartItem.quantity + total;
  }, 0);
}

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
export const getCartItems = state => state.cart.cartItems;
export default cartSlice.reducer;