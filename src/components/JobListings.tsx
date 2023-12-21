"use client";

import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import Button from "./Button";
import { useState } from "react";
import { JobObj } from "@/utils/types";
import { RootState } from "@/store/store";

export default function JobListings() {
  const jobListings = useSelector((state: RootState) => state?.job?.jobData);
  const [show, setShow] = useState(9);

  const handleLoadMore = () => {
    setShow(jobListings?.length);
  };

  return (
    <div className="mt-16 pb-32">
      <ul className="grid grid-cols-3 gap-x-8 gap-y-20">
        {jobListings?.slice(0, show)?.map((job: JobObj) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </ul>

      {show === jobListings.length ? null : (
        <div className="flex justify-center mt-8">
          <Button className="bg-blue-500 text-white" onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
