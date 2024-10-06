import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api, token } from "../Api";

const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": `Bearer 1|${token}`,
  // 'Content-Type': 'multipart/form-data'
};


// get all valid testimonials
export const getTestimonials: any = createAsyncThunk(
  "testimonials/getTestimonials",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/Testimonial/validTestimonial`, {
        method: "GET",
        headers,
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