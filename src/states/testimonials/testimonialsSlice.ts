import { createSlice } from "@reduxjs/toolkit";
import { getTestimonials } from "./handleRequests";
import { toast } from "react-toastify";


const initialState = {
  testimonials: null,
  loading: false,
};

export const TestimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    fn: (state, { payload }) => { },
  },
  extraReducers: (builder) => {

    // getTestimonials
    builder
      .addCase(getTestimonials.pending, (state, { payload }) => {
        state.loading = true
        state.testimonials = null
      })
      .addCase(getTestimonials.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.testimonials = payload
        // toast.success("Succsessfull getTestimonials");
      })
      .addCase(getTestimonials.rejected, (state, { payload }: any) => {
        state.loading = false;
        toast.error(payload.message);
      });

  },
});

export const { fn } = TestimonialsSlice.actions;
export default TestimonialsSlice.reducer;
