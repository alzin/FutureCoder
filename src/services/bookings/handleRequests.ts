import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api, headers } from "@/constants";

// add Booking
export const addBooking: any = createAsyncThunk(
  "bookings/addBooking",
  async (
    { bookingData }: { bookingData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${Api}/free_lessons/createSession`, {
        method: "POST",
        headers,
        body: JSON.stringify(bookingData),
      });
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


