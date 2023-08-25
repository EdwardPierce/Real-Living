import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist(state, action) {
      const { id, image } = action.payload;

      return [...state, { id, image }];
    },
    updateWishlist(state, action) {
      const { id, image, name } = action.payload;

      return state.map((item) => {
        if (item.id === id) {
          return { id, image, name };
        } else {
          return item;
        }
      });
    },
    
  },
});

export const { addWishlist, updateWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
