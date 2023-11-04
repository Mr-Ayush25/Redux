import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Controllers/postSlice";
import usersReducer from "./Controllers/userSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
  },
});
