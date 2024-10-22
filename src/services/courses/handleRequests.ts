import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api, headers } from "@/constants";


// get all courses
export const getCourses: any = createAsyncThunk(
  "courses/getCourses",
  async ({ currentPage, lang }: { currentPage: number, lang: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/courses?page=${currentPage}&&language=${lang}`, {
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

// get all courses
export const getAvilableCourses: any = createAsyncThunk(
  "courses/getAvilableCourses",
  async ({ currentPage, timeZone, lang }: { currentPage: number, timeZone: string, lang: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/courses/getCourseHaveTime?page=${currentPage}`, {
        method: "POST",
        headers,
        body: JSON.stringify({ timezone: timeZone, language: lang }),
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


// get course by id
export const getCourseById: any = createAsyncThunk(
  "courses/getCourseById",
  async ({ courseId, lang }: { courseId: string, lang: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/courses?id=${courseId}&&language=${lang}`, {
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


