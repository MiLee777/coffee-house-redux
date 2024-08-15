import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    // addItemToCart(state, action) {
    //   state.cartItems.push({
    //     id: action.payload.item.id,
    //     quantity: action.payload.quantity,
    //   })
    // }
    addItemToCart(state, action) {
      console.log('Payload received in reducer:', action.payload);
      const { item, quantity } = action.payload;
      if (item && item.id) {
        state.cartItems.push({
          id: item.id,
          quantity: quantity,
        });
      } else {
        console.error('Item is undefined or missing an id in reducer:', item);
      }
    }
    
  }
})

export const { addItemToCart } = cartSlice.actions;
export const getCartItems = state => state.cart.cartItems;
export default cartSlice.reducer;