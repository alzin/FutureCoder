import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "@/constants/api";
import { headers } from "@/constants/headers";
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

export const checkVerification: any = createAsyncThunk(
  "guestUsers/checkVerification",
  async ({ guestUserId }: { guestUserId: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${Api}/guest_users?id=${guestUserId}`, {
        method: "GET",
        headers,
      });
      const data = await response.json();

      if (response.ok) {
        return data[0].data.email_verified;
      } else {
        return rejectWithValue(data.mesage);
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// add guest user
export const addGuestUser: any = createAsyncThunk(
  "guestUsers/addGuestUser",
  async (
    { guestUserData }: { guestUserData: FormData },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch(`${Api}/guest_users`, {
        method: "POST",
        headers,
        body: JSON.stringify(guestUserData),
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