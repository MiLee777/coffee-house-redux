import { configureStore } from "@reduxjs/toolkit";
import dishes from "./dishesSlice";
import cart from "./cartSlice";
import menu from "./menuSlice";

export const store = configureStore({
  reducer: {
    dishes: dishes,
    cart: cart,
    menu: menu,
  },
})