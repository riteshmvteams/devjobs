"use client";

import { useSelector } from "react-redux";
import JobCard from "./JobCard";

export default function JobListings() {
  const { jobData: jobListings } = useSelector((state) => state.job);

  return (
    <div className="mt-16 pb-32">
      <ul className="grid grid-cols-3 gap-x-8 gap-y-20">
        {jobListings?.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </ul>
    </div>
  );
}
