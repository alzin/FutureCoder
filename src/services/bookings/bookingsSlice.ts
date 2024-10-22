import { createSlice } from "@reduxjs/toolkit";
import { addBooking } from "./handleRequests";
import { toast } from "react-toastify";


const initialState = {
  bookings: null,
  findBooking: null,
  totalCount: 0,
  currentPage: 1,
  loading: false,
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },

  extraReducers: (builder) => {

    // addBooking
    builder
      .addCase(addBooking.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(addBooking.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success("Successfull, Please check your email to Confirm  Reservation")
      })
      .addCase(addBooking.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });
  },
});

export const { setCurrentPage } =
  bookingsSlice.actions;
export default bookingsSlice.reducer;
