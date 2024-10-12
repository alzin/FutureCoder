import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "@/constants/api";
import { headers } from "@/constants/headers";

// get all subscribers
export const getSubscribers: any = createAsyncThunk(
  "subscribers/getSubscribers",
  async ({ currentPage }: { currentPage: number }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/subscribers?page=${currentPage}`, {
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

// get subscriber by id
export const getSubscriberById = createAsyncThunk(
  "subscribers/getSubscriberById",
  async ({ blogId }: { blogId: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/subscriber?id=${blogId}`, {
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

// add subscriber
export const addSubscriber: any = createAsyncThunk(
  "subscribers/addSubscriber",
  async (
    { subscriber }: { subscriber: Subscriber },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${Api}/subscribers`, {
        method: "POST",
        headers,
        body: JSON.stringify(subscriber),
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

//  update subscriber
export const updateSubscriber = createAsyncThunk(
  "subscribers/updateSubscriber",
  async ({ newSubscriber, subscriberId }: { newSubscriber: FormData, subscriberId: string }, { rejectWithValue }) => {

    newSubscriber.append("_method", "put");

    try {
      const response = await fetch(`${Api}/subscriber/${subscriberId}`, {
        method: "POST",
        headers: {

        },
        body: JSON.stringify(newSubscriber),
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

// delete subscriber
export const deleteSubscriber = createAsyncThunk(
  "subscribers/deleteBlog",
  async ({ subscriberId }: { subscriberId: string }, { rejectWithValue }) => {

    try {
      const response = await fetch(`${Api}/subscriber?id=${subscriberId}`, {
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