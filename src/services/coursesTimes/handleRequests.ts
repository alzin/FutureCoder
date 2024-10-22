import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api, headers } from "@/constants";


// get all coursesTimes
export const getCoursesTimes = createAsyncThunk(
  "coursesTimes/getCoursesTimes",
  async ({ currentPage }: { currentPage: number }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/courses_time?page=${currentPage}`, {
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

// get CoursesTimes by id
export const getCoursesTimesById = createAsyncThunk(
  "coursesTimes/getCoursesTimesById",
  async ({ coursesTimesId }: { coursesTimesId: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/courses_time?id=${coursesTimesId}`, {
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

// get Course Dates By CourseId
export const getCourseDatesByCourseId: any = createAsyncThunk(
  "coursesTimes/getCourseDatesByCourseId",
  async ({ courseId, userId }: { courseId: string, userId: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/courses_time/courseDays/${courseId}/${userId}`, {
        method: "GET",
        headers,
      });
      const data = await response.json();

      if (response.ok) {
        console.log(data)
        return data;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// get Course Times By Date
export const getCourseTimesByDate: any = createAsyncThunk(
  "coursesTimes/getCourseTimesByDate",
  async ({ courseId, date, userId }: { courseId: string, date: string, userId: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/courses_time/availableTimes/${courseId}/${date}/${userId}`, {
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

// get all course times by timeZone
export const getCouseseTimeByTimezone: any = createAsyncThunk(
  "courses/getCouseseTimeByTimezone",
  async (courseData: { courseData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${Api}/courses_time/timezone`, {
        method: "POST",
        headers,
        body: JSON.stringify(courseData),
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
)
