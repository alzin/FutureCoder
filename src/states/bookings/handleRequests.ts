import { createAsyncThunk } from "@reduxjs/toolkit";
import {Api,token} from "../Api";

const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": `Bearer 1|${token}`
  // 'Content-Type': 'multipart/form-data'
};


// get all bookings
export const getBookings = createAsyncThunk(
  "bookings/getBookings",
  async ({ currentPage }: { currentPage: number }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/free_lessons?page=${currentPage}`, {
        method: "GET",
        headers,
      });
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// get Booking by id
export const getBookingById = createAsyncThunk(
  "bookings/getBookingById",
  async ({ bookingId }: { bookingId: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/free_lessons?id=${bookingId}`, {
        method: "GET",
        headers,
      });
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// add Booking
export const addBooking:any = createAsyncThunk(
  "bookings/addBooking",
  async (
    { bookingData }: { bookingData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${Api}/free_lessons`, {
        method: "POST",
        headers,
        body: JSON.stringify(bookingData),
      });
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

//  update Booking
export const updateBooking = createAsyncThunk(
  "bookings/updateBooking",
  async ({ newBookingData, bookingId }: { newBookingData: FormData, bookingId: string }, { rejectWithValue }) => {

    newBookingData.append("_method", "put");

    try {
      const response = await fetch(`${Api}/free_lessons/${bookingId}`, {
        method: "POST",
        headers: {
          
        },
        body: JSON.stringify(newBookingData),
      });
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// delete Booking
export const deleteBooking = createAsyncThunk(
  "bookings/deleteBooking",
  async ({ bookingId }: { bookingId: string }, { rejectWithValue }) => {

    try {
      const response = await fetch(`${Api}/free_lessons?id=${bookingId}`, {
        method: "DELETE",
        headers,
      });
      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        return rejectWithValue(data);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);