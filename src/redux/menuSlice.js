import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    selectedCategorySize: "s",
    selectedCategoryAdditives: ""
  },
  reducers: {
    filterCategorySize: (state, action) => {
      state.selectedCategorySize = action.payload
    },

    filterCategoryAdditives: (state, action) => {
      state.selectedCategoryAdditives = action.payload
    }
  }
})

export const { filterCategorySize, filterCategoryAdditives } = menuSlice.actions;
export const getSelectedCategorySize = state => state.menu.selectedCategorySize;
export const getSelectedCategoryAdditives = state => state.menu.selectedCategoryAdditives;
export default menuSlice.reducer;