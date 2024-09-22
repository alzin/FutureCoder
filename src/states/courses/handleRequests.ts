import { createAsyncThunk } from "@reduxjs/toolkit";
import {Api,token} from "../Api";

const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": `Bearer 1|${token}`
  // 'Content-Type': 'multipart/form-data'
};


// get all courses
export const getCourses:any = createAsyncThunk(
  "courses/getCourses",
  async ({ currentPage }: { currentPage: number }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/courses?page=${currentPage}`, {
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

// get course by id
export const getCourseById = createAsyncThunk(
  "courses/getCourseById",
  async ({ courseId }: { courseId: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/courses?id=${courseId}`, {
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

// get courses by age
export const getCoursesByAge:any = createAsyncThunk(
  "courses/getCoursesByAge",
  async ({ age }: { age: number }, { rejectWithValue }) => {
    console.log(age)
    try {
      const response = await fetch(`${Api}/courses/courseById?age=${age}`, {
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

// add course
export const addCourse = createAsyncThunk(
  "courses/addCourse",
  async (
    { courseData }: { courseData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${Api}/courses`, {
        method: "POST",
        headers,
        body: JSON.stringify(courseData),
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

//  update course
export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ newCourseData, courseId }: { newCourseData: FormData, courseId: string }, { rejectWithValue }) => {

    newCourseData.append("_method", "put");

    try {
      const response = await fetch(`${Api}/courses/${courseId}`, {
        method: "POST",
        headers: {
          
        },
        body: JSON.stringify(newCourseData),
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

// delete Course
export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async ({ courseId }: { courseId: string }, { rejectWithValue }) => {

    try {
      const response = await fetch(`${Api}/courses?id=${courseId}`, {
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

