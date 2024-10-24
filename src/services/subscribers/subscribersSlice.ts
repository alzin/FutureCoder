import { createSlice } from "@reduxjs/toolkit";
import { getSubscribers, getSubscriberById, addSubscriber, updateSubscriber, deleteSubscriber } from "./handleRequests";
import { toast } from "react-toastify";


const initialState = {
  subscribers: null,
  findSubscriber: null,
  totalCount: 0,
  currentPage: 1,
  loading: false,
};

export const SubscribersSlice = createSlice({
  name: "subscribers",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },

  extraReducers: (builder) => {

    // getSubscribers
    builder
      .addCase(getSubscribers.pending, (state, { payload }) => {
        state.loading = true
        state.subscribers = null
        state.totalCount = 0
      })
      .addCase(getSubscribers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.subscribers = payload.data
        state.totalCount = payload.total
        // toast.success("Succsessfull getSubscribers");
      })
      .addCase(getSubscribers.rejected, (state, { payload }: any) => {
        state.loading = false;
        toast.error(payload.message);
      });

    // getSubscriberById
    builder
      .addCase(getSubscriberById.pending, (state, { payload }) => {
        state.loading = true
        state.findSubscriber = null
      })
      .addCase(getSubscriberById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.findSubscriber = payload
        // toast.success("Succsessfull getSubscriberById");
      })
      .addCase(getSubscriberById.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });

    // addSubscriber
    builder
      .addCase(addSubscriber.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(addSubscriber.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success("Please verify your email!");
      })
      .addCase(addSubscriber.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });

    // updateSubscriber
    builder
      .addCase(updateSubscriber.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(updateSubscriber.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success("Succsessfull updateSubscriber");
      })
      .addCase(updateSubscriber.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });

    // deleteSubscriber
    builder
      .addCase(deleteSubscriber.pending, (state, { payload }) => {
        state.loading = true
      })
      .addCase(deleteSubscriber.fulfilled, (state, { payload }) => {
        state.loading = false;
        toast.success("Succsessfull deleteSubscriber");
      })
      .addCase(deleteSubscriber.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload as string);
      });
  },
});

export const { setCurrentPage } =
  SubscribersSlice.actions;
export default SubscribersSlice.reducer;
