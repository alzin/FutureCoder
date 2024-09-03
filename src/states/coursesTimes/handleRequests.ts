import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api, token } from "../Api";


const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": `Bearer 1|${token}`
  // 'Content-Type': 'multipart/form-data'
};



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
export const getCourseDatesByCourseId:any = createAsyncThunk(
  "coursesTimes/getCourseDatesByCourseId",
  async ({ courseId }: { courseId: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/courses_time/courseDays/${courseId}`, {
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
export const getCourseTimesByDate:any = createAsyncThunk(
  "coursesTimes/getCourseTimesByDate",
  async ({ courseId, date }: { courseId: string, date: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/courses_time/availableTimes/${courseId}/${date}`, {
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

// add CoursesTimes
export const addCoursesTimes = createAsyncThunk(
  "coursesTimes/addCoursesTimes",
  async (
    { coursesTimesData }: { coursesTimesData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${Api}/courses_time`, {
        method: "POST",
        headers,
        body: JSON.stringify(coursesTimesData),
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

//  update CoursesTimes
export const updateCoursesTimes = createAsyncThunk(
  "coursesTimes/updateCoursesTimes",
  async ({ newCoursesTimesData, coursesTimesId }: { newCoursesTimesData: FormData, coursesTimesId: string }, { rejectWithValue }) => {

    newCoursesTimesData.append("_method", "put");

    try {
      const response = await fetch(`${Api}/courses_time/${coursesTimesId}`, {
        method: "POST",
        headers: {

        },
        body: JSON.stringify(newCoursesTimesData),
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

// delete CoursesTimes
export const deleteCoursesTimes = createAsyncThunk(
  "coursesTimes/deleteCoursesTimes",
  async ({ coursesTimesId }: { coursesTimesId: string }, { rejectWithValue }) => {

    try {
      const response = await fetch(`${Api}/courses_time?id=${coursesTimesId}`, {
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