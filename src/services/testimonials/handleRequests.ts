import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api, headers } from "@/constants";


// get all valid testimonials
export const getTestimonials: any = createAsyncThunk(
  "testimonials/getTestimonials",
  async ({ lang }: { lang: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/Testimonial/validTestimonial?language=${lang}`, {
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
