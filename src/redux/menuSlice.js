import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuSelections: {}, // Хранилище состояния для каждого item.id
    totalMenuPrice: 0,
    menuItems: [], // Список добавленных в корзину элементов
  },
  reducers: {
    filterCategorySize: (state, action) => {
      const { itemId, size } = action.payload;

      if (!state.menuSelections[itemId]) {
        state.menuSelections[itemId] = { selectedCategorySize: size, selectedCategoryAdditives: "" };
      } else {
        state.menuSelections[itemId].selectedCategorySize = size;
      }

      state.totalMenuPrice = state.menuItems.reduce((total, item) => {
        const selection = state.menuSelections[item.id] || {};
        const sizePrice = parseFloat(item.sizes[selection.selectedCategorySize]?.add || 0);
        const additivesPrice = parseFloat(
          selection.selectedCategoryAdditives ? item.additives[selection.selectedCategoryAdditives]?.add || 0 : 0
        );
        return total + sizePrice + additivesPrice;
      }, 0);
    },

    filterCategoryAdditives: (state, action) => {
      const { itemId, additive } = action.payload;

      if (!state.menuSelections[itemId]) {
        state.menuSelections[itemId] = { selectedCategorySize: "s", selectedCategoryAdditives: additive };
      } else {
        state.menuSelections[itemId].selectedCategoryAdditives = additive;
      }

      state.totalMenuPrice = state.menuItems.reduce((total, item) => {
        const selection = state.menuSelections[item.id] || {};
        const sizePrice = parseFloat(item.sizes[selection.selectedCategorySize]?.add || 0);
        const additivesPrice = parseFloat(
          selection.selectedCategoryAdditives ? item.additives[selection.selectedCategoryAdditives]?.add || 0 : 0
        );
        return total + sizePrice + additivesPrice;
      }, 0);
    },

    addItemToTotal: (state, action) => {
      const { itemId, sizes, additives } = action.payload;

      const selection = state.menuSelections[itemId] || { selectedCategorySize: "s", selectedCategoryAdditives: "" };
      const sizePrice = parseFloat(sizes[selection.selectedCategorySize]?.add || 0);
      const additivesPrice = parseFloat(
        selection.selectedCategoryAdditives ? additives[selection.selectedCategoryAdditives]?.add || 0 : 0
      );

      const totalMenuPrice = sizePrice + additivesPrice;

      state.menuItems.push({
        id: itemId,
        sizes,
        additives,
        totalMenuPrice,
      });

      state.totalMenuPrice = state.menuItems.reduce((total, item) => total + item.totalMenuPrice, 0);
    },
  },
});

export const getTotalMenuPrice = (state) => state.menu.totalMenuPrice.toFixed(2);
export const getMenuSelections = (state) => state.menu.menuSelections;

export const { filterCategorySize, filterCategoryAdditives, addItemToTotal } = menuSlice.actions;

export default menuSlice.reducer;