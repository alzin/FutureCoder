import { configureStore } from "@reduxjs/toolkit";

import blogsSlice from "@/states/blogs/blogsSlice";
import subscribersSlice from "@/states/subscribers/subscribersSlice";
import coursesSlice from "@/states/courses/coursesSlice";
import coursesTimesSlice from "@/states/coursesTimes/coursesTimesSlice";
import guestUsersSlice from "@/states/guestUsers/guestUsersSlice";
import bookingsSlice from "@/states/bookings/bookingsSlice";
import toggleSlice from "@/states/toggle/toggleSlice";
import testimonialsSlice from "@/states/testimonials/testimonialsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
    subscribers: subscribersSlice,
    courses: coursesSlice,
    coursesTimes: coursesTimesSlice,
    guestUsers: guestUsersSlice,
    bookings: bookingsSlice,
    toggle: toggleSlice,
    testimonials: testimonialsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
