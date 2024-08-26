import { configureStore } from "@reduxjs/toolkit";

import blogsSlice  from "@/states/blogs/blogs";

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
