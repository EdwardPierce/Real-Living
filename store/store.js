import { configureStore } from "@reduxjs/toolkit";

import PaymentReducer from "../reducers/paymentSlice";
import WishlistReducer from "../reducers/wishlistSlice";
import IsWishlistOpenReducer from "../reducers/isWishlistOpenSlice";

export default configureStore({
  reducer: {
    payment: PaymentReducer,
    wishlist: WishlistReducer,
    isWishlistOpen: IsWishlistOpenReducer,
  },
});
