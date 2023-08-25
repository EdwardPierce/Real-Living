import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const isWishlistOpen = createSlice({
  name: "isWishlistOpen",
  initialState,
  reducers: {
    openWishlist(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { openWishlist } = isWishlistOpen.actions;

export default isWishlistOpen.reducer;
