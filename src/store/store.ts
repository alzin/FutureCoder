import { configureStore } from "@reduxjs/toolkit";

import blogsSlice from "@/services/blogs/blogsSlice";
import subscribersSlice from "@/services/subscribers/subscribersSlice";
import coursesSlice from "@/services/courses/coursesSlice";
import coursesTimesSlice from "@/services/coursesTimes/coursesTimesSlice";
import guestUsersSlice from "@/services/guestUsers/guestUsersSlice";
import bookingsSlice from "@/services/bookings/bookingsSlice";
import toggleSlice from "@/services/toggle/toggleSlice";
import testimonialsSlice from "@/services/testimonials/testimonialsSlice";

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
