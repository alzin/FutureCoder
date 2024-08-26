import { createSlice } from "@reduxjs/toolkit";
import { } from "./handleRequests";
import { toast } from "react-toastify";


const initialState = {
  blogs: null,
  loading: false,
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    fn: (state, { payload }) => {

    },

  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(creatModel.pending, (state, { payload }) => {
    //     state.loading = true;
    //     state.data = null
    //   })
    //   .addCase(creatModel.fulfilled, (state, { payload }) => {
    //     state.loading = false;
    //     toast.success("");
    //   })
    //   .addCase(creatModel.rejected, (state, { payload }) => {
    //     state.loading = false;
    //     toast.error(payload);
    //   });
  },
});

export const {fn} =
blogsSlice.actions;
export default blogsSlice.reducer;
