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
      const { title, location, fullTime } = action.payload;
      const contract = fullTime ? "full time" : "part time";

      const filtered = state?.jobData.filter((job) => {
        return (
          job.position.toLowerCase().indexOf(title.toLowerCase()) > -1 &&
          job.location.toLowerCase().indexOf(location.toLowerCase()) > -1 &&
          job.contract.toLowerCase().indexOf(contract.toLowerCase()) > -1
        );
      });

      state.filteredJobs = filtered;
    },
  },
});

export const { changeTheme, filterJobs } = jobSlice.actions;

export default jobSlice.reducer;
