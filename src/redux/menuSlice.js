import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuItems: [],
    totalPriceToMenu: 0,
  },
  reducers: {
    addItemToMenu: (state, action) => {
      const { price, size, additives } = action.payload;

      // Вычисление общей цены элемента с учётом размера и добавок
      const basePrice = parseFloat(price); // Начальная цена
      const sizePrice = parseFloat(size.add); // Добавочная цена за выбранный размер
      const additivesPrice = additives.reduce((total, additive) => total + parseFloat(additive.add), 0); // Сумма всех добавок

      const totalItemPrice = basePrice + sizePrice + additivesPrice;

      // Добавление новой позиции в меню
      state.menuItems.push({ ...action.payload, totalPrice: totalItemPrice });

      // Обновление общей суммы
      state.totalPriceToMenu += totalItemPrice;
    }
  }
})

export const getTotalPriceToMenu = state => state.menu.totalPriceToMenu;

export const { addItemToMenu } = menuSlice.actions;
export const getMenuItems = state => state.menu.menuItems;
export default menuSlice.reducer;