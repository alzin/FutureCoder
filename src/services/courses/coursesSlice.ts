import { createSlice } from "@reduxjs/toolkit";
import { getCourses, getAvilableCourses, getCourseById } from "./handleRequests";
import { toast } from "react-toastify";


const initialState = {
  courses: null,
  coursesByAge: null,
  findCourse: null,
  totalCount: 0,
  currentPage: 1,
  loading: false,
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },

  extraReducers: (builder) => {

    // getCourses
    builder
      .addCase(getCourses.pending, (state, { payload }) => {
        state.courses = null
        state.totalCount = 0
      })
      .addCase(getCourses.fulfilled, (state, { payload }) => {
        state.courses = payload.data.data
        state.totalCount = payload.data.total
        // toast.success("Succsessfull getCourses");
      })
      .addCase(getCourses.rejected, (state, { payload }) => {
        toast.error(payload as string);
      });

    // getAvilableCourses
    builder
      .addCase(getAvilableCourses.pending, (state, { payload }) => {
        state.courses = null
        state.totalCount = 0
      })
      .addCase(getAvilableCourses.fulfilled, (state, { payload }) => {
        state.courses = payload.data
        state.totalCount = payload.total
        // toast.success("Succsessfull getAvilableCourses");
      })
      .addCase(getAvilableCourses.rejected, (state, { payload }) => {
        toast.error(payload as string);
      });

    // getCourseById
    builder
      .addCase(getCourseById.pending, (state, { payload }) => {
        state.findCourse = null
      })
      .addCase(getCourseById.fulfilled, (state, { payload }) => {
        state.findCourse = payload.data
        // toast.success("Succsessfull getCourseById");
      })
      .addCase(getCourseById.rejected, (state, { payload }) => {
        toast.error(payload as string);
      });
  },
});

export const { setCurrentPage } =
  coursesSlice.actions;
export default coursesSlice.reducer;
