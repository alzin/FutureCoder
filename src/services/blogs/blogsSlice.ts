import { createSlice } from "@reduxjs/toolkit";
import { getBlogs, getLastBlogs, getBlogById } from "./handleRequests";
import { toast } from "react-toastify";


const initialState = {
  blogs: null,
  lastBlogs: null,
  findBlog: null,
  totalCount: 0,
  currentPage: 1,
  loading: false,
};

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },

  extraReducers: (builder) => {

    // getBlogs
    builder
      .addCase(getBlogs.pending, (state, { payload }) => {
        state.loading = true
        state.blogs = null
        state.totalCount = 0
      })
      .addCase(getBlogs.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.blogs = payload.data.data
        state.totalCount = payload.data.total
        // toast.success("Succsessfull getBlogs");
      })
      .addCase(getBlogs.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });

    // getLastBlogs
    builder
      .addCase(getLastBlogs.pending, (state, { payload }) => {
        state.loading = true
        state.lastBlogs = null
      })
      .addCase(getLastBlogs.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.lastBlogs = payload
        // toast.success("Succsessfull getLastBlogs");
      })
      .addCase(getLastBlogs.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });

    // getBlogById
    builder
      .addCase(getBlogById.pending, (state, { payload }) => {
        state.loading = true
        state.findBlog = null
      })
      .addCase(getBlogById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.findBlog = payload.data
        // toast.success("Succsessfull getBlogById");
      })
      .addCase(getBlogById.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });
  },
});

export const { setCurrentPage } =
  blogsSlice.actions;
export default blogsSlice.reducer;
