import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    selectedCategorySize: "s",
    selectedCategoryAdditives: "",
    totalMenuPrice: 0,
    menuItems: []
  },
  reducers: {
    filterCategorySize: (state, action) => {
      state.selectedCategorySize = action.payload;
      state.totalMenuPrice = state.menuItems.reduce((total, item) => {
        return total + item.sizes[state.selectedCategorySize].add + (state.selectedCategoryAdditives ? item.additives[state.selectedCategoryAdditives].add : 0);
      }, 0);
    },

    filterCategoryAdditives: (state, action) => {
      state.selectedCategoryAdditives = action.payload;
      state.totalMenuPrice = state.menuItems.reduce((total, item) => {
        return total + item.sizes[state.selectedCategorySize].add + (state.selectedCategoryAdditives ? item.additives[state.selectedCategoryAdditives].add : 0);
      }, 0);
    },

    addItemToTotal: (state, action) => {
      const { sizes, additives } = action.payload;
      const sizePrice = parseFloat(sizes[state.selectedCategorySize].add || 0);
      const additivesPrice = parseFloat(state.selectedCategoryAdditives ? additives[state.selectedCategoryAdditives].add || 0 : 0);

      const totalMenuPrice = sizePrice + additivesPrice;

      state.menuItems.push({
        sizes,
        additives,
        totalMenuPrice,
      });

      state.totalMenuPrice = state.menuItems.reduce((total, item) => total + item.totalMenuPrice, 0);
    }

  }
})

export const getTotalMenuPrice = (state) => {
  const total = state.menu.menuItems.reduce((total, menuItem) => {
    return menuItem.totalMenuPrice + total;
  }, 0);
  return total.toFixed(2);
}

export const { filterCategorySize, filterCategoryAdditives, addItemToTotal } = menuSlice.actions;
export const getSelectedCategorySize = state => state.menu.selectedCategorySize;
export const getSelectedCategoryAdditives = state => state.menu.selectedCategoryAdditives;
export default menuSlice.reducer;