import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"; // Import the auth reducer

const store = configureStore({
  reducer: {
    auth: authReducer, // Add the auth reducer to the store
  },
});

export default store;
