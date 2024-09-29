import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api, token } from "../Api";


const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": `Bearer 1|${token}`
  // 'Content-Type': 'multipart/form-data'
};


// get all blogs
export const getBlogs: any = createAsyncThunk(
  "blogs/getBlogs",
  async ({ currentPage }: { currentPage: number }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/blogs?page=${currentPage}`, {
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

// get blog by id
export const getBlogById: any = createAsyncThunk(
  "blogs/getBlogById",
  async ({ blogId }: { blogId: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/blogs?id=${blogId}`, {
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

// add blog
export const addBlog = createAsyncThunk(
  "blogs/addBlog",
  async (
    { blogData }: { blogData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${Api}/blogs`, {
        method: "POST",
        headers,
        body: JSON.stringify(blogData),
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

//  update blog
export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async ({ newBlogData, blogId }: { newBlogData: FormData, blogId: string }, { rejectWithValue }) => {

    newBlogData.append("_method", "put");

    try {
      const response = await fetch(`${Api}/blogs/${blogId}`, {
        method: "POST",
        headers: {

        },
        body: JSON.stringify(newBlogData),
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

// delete blog
export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async ({ blogId }: { blogId: string }, { rejectWithValue }) => {

    try {
      const response = await fetch(`${Api}/blogs?id=${blogId}`, {
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