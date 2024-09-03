import { createAsyncThunk } from "@reduxjs/toolkit";
import {Api,token} from "../Api";


const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": `Bearer 1|${token}`
  // 'Content-Type': 'multipart/form-data'
};


// get all guestUsers
export const getGuestUsers = createAsyncThunk(
  "guestUsers/getGuestUsers",
  async ({ currentPage }: { currentPage: number }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/guestUsers?page=${currentPage}`, {
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

// get guestUser by id
export const getGuestUserById = createAsyncThunk(
  "guestUsers/getGuestUserById",
  async ({ guestUserId }: { guestUserId: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/guestUsers?id=${guestUserId}`, {
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

// add guest user
export const addGuestUser = createAsyncThunk(
  "guestUsers/addGuestUser",
  async (
    { guestUserData }: { guestUserData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${Api}/guestUsers`, {
        method: "POST",
        headers,
        body: JSON.stringify(guestUserData),
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

//  update guest user
export const updateGuestUser = createAsyncThunk(
  "guestUsers/updateGuestUser",
  async ({ newGuestUserData, guestUserId }: { newGuestUserData: FormData, guestUserId: string }, { rejectWithValue }) => {

    newGuestUserData.append("_method", "put");

    try {
      const response = await fetch(`${Api}/guestUsers/${guestUserId}`, {
        method: "POST",
        headers: {
          
        },
        body: JSON.stringify(newGuestUserData),
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

// delete guest user
export const deleteGuestUser = createAsyncThunk(
  "guestUsers/deleteGuestUser",
  async ({ guestUserId }: { guestUserId: string }, { rejectWithValue }) => {

    try {
      const response = await fetch(`${Api}/guestUsers?id=${guestUserId}`, {
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