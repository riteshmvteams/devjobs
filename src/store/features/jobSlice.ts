import { createSlice } from "@reduxjs/toolkit";
import data from "../../../public/assets/data.json";
import { JobObj } from "@/utils/types";

type State = {
  jobData: JobObj[];
  theme: string | null;
  filteredJobs: JobObj[] | [];
};

const initialState: State = {
  jobData: data,
  theme:
    typeof window !== "undefined" && localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light",
  filteredJobs: [],
};

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("theme", state.theme);
      }
    },

    filterJobs: (state, action) => {
      console.log(action.payload, "payload");
    },
  },
});

export const { changeTheme, filterJobs } = jobSlice.actions;

export default jobSlice.reducer;
