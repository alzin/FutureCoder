import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api, headers } from "@/constants";

// get all blogs
export const getBlogs: any = createAsyncThunk(
  "blogs/getBlogs",
  async ({ currentPage, lang }: { currentPage: number, lang: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/blogs?page=${currentPage}&&language=${lang}`, {
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

// getLastBlogs
export const getLastBlogs: any = createAsyncThunk(
  "blogs/getLastBlogs",
  async ({ lang }: { lang: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/blogs/lastThree?language=${lang}`, {
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

// get blog by id
export const getBlogById: any = createAsyncThunk(
  "blogs/getBlogById",
  async ({ blogId, lang }: { blogId: string, lang: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/blogs?id=${blogId}&&language=${lang}`, {
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
