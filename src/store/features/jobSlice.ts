import { createSlice } from "@reduxjs/toolkit";
import data from "../../../public/assets/data.json";

const initialState = {
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
export default jobSlice.reducer;
