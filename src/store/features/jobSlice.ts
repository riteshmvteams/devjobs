import { createSlice } from "@reduxjs/toolkit";
import data from "../../../public/assets/data.json";
import { JobObj } from "@/utils/types";
import { RootState } from "../store";

const initialState: { jobData: JobObj[] } = {
  jobData: data,
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    addData: () => {},
  },
});

export const { addData } = jobSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const JobState = (state: RootState) => state?.job;

export default jobSlice.reducer;
