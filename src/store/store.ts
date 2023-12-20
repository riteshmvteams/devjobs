import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "@/store/features/jobSlice";

export const store = configureStore({
  reducer: {
    job: jobReducer,
  },
});
