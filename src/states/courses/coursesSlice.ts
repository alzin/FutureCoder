import { createSlice } from "@reduxjs/toolkit";
import { getCourses, getCourseById, getCoursesByAge, addCourse, updateCourse, deleteCourse } from "./handleRequests";
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
        state.courses = payload[0].data.data
        state.totalCount = payload[0].data.total
        // toast.success("Succsessfull getCourses");
      })
      .addCase(getCourses.rejected, (state, { payload }) => {
        toast.error(payload as string);
      });

    // getCourseById
    builder
      .addCase(getCourseById.pending, (state, { payload }) => {
        state.findCourse = null
      })
      .addCase(getCourseById.fulfilled, (state, { payload }) => {
        state.findCourse = payload[0].data
        // toast.success("Succsessfull getCourseById");
      })
      .addCase(getCourseById.rejected, (state, { payload }) => {
        toast.error(payload as string);
      });

    // getCoursesByAge
    builder
      .addCase(getCoursesByAge.pending, (state, { payload }) => {
        state.coursesByAge = null
        state.loading = true
      })
      .addCase(getCoursesByAge.fulfilled, (state, { payload }) => {
        state.coursesByAge = payload
        state.loading = false
        // toast.success("Succsessfull getCoursesByAge");
      })
      .addCase(getCoursesByAge.rejected, (state, { payload }) => {
        state.loading = false
        toast.error(payload as string);
      });

    // addCourse
    builder
      .addCase(addCourse.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(addCourse.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success("Succsessfull addCourse");
      })
      .addCase(addCourse.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });

    // updateCourse
    builder
      .addCase(updateCourse.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(updateCourse.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success("Succsessfull updateCourse");
      })
      .addCase(updateCourse.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });

    // deleteCourse
    builder
      .addCase(deleteCourse.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(deleteCourse.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success("Succsessfull deleteCourse");
      })
      .addCase(deleteCourse.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });
  },
});

export const { setCurrentPage } =
  coursesSlice.actions;
export default coursesSlice.reducer;
