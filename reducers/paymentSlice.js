import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateCheckIn: null,
  dateCheckOut: null,
  paymentForDays: null,
  serviceFee: null,
  totalPrice: null,
  daysDifference: null,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    createDateCheckIn(state, action) {
      state.dateCheckIn = action.payload;
    },
    createDateCheckOut(state, action) {
      state.dateCheckOut = action.payload;
    },
    calculatePrice(state, action) {
      const { dateCheckIn, dateCheckOut, price } = action.payload;
      const _price = Number(price.$numberDecimal);
      const date1 = new Date(dateCheckIn);
      const date2 = new Date(dateCheckOut);
      const timeDifference = date2 - date1;
      const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

      state.paymentForDays = _price * daysDifference;
      state.serviceFee = (_price * 0.09 * daysDifference).toFixed();
      state.totalPrice = (
        _price * daysDifference +
        _price * 0.09 * daysDifference
      ).toFixed();
      state.daysDifference = daysDifference;
    },
  },
});

export const { createDateCheckIn, createDateCheckOut, calculatePrice } =
  paymentSlice.actions;

export default paymentSlice.reducer;
