import { createSlice } from "@reduxjs/toolkit";
import { getBookings, getBookingById, addBooking, updateBooking, deleteBooking } from "./handleRequests";
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
    
    // getBookings
    builder
      .addCase(getBookings.pending, (state, { payload }) => {
        state.loading = true
        state.bookings = null
        state.totalCount = 0
      })
      .addCase(getBookings.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.bookings = payload
        state.totalCount = payload
        // toast.success("Succsessfull getBookings");
      })
      .addCase(getBookings.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });

    // getBookingById
    builder
    .addCase(getBookingById.pending, (state, { payload }) => {
      state.loading = true
      state.findBooking = null
    })
    .addCase(getBookingById.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.findBooking = payload
      // toast.success("Succsessfull getBookingById");
    })
    .addCase(getBookingById.rejected, (state, { payload }) => {
      state.loading = false;
      toast.error(payload as string);
    });

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

      // updateBooking
    builder
    .addCase(updateBooking.pending, (state, { payload }) => {
      state.loading = true
    })
    .addCase(updateBooking.fulfilled, (state, { payload }) => {
      state.loading = false;
      toast.success("Succsessfull updateBooking");
    })
    .addCase(updateBooking.rejected, (state, { payload }) => {
      state.loading = false;
      toast.error(payload as string);
    });

    // deleteBooking
    builder
      .addCase(deleteBooking.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(deleteBooking.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success("Succsessfull deleteBooking");
      })
      .addCase(deleteBooking.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });
  },
});

export const { setCurrentPage } =
  bookingsSlice.actions;
export default bookingsSlice.reducer;
