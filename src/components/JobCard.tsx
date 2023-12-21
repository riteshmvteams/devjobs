import { JobObj } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import JobIntro from "./JobIntro";

export default function JobCard({ job }: { job: JobObj }) {
  return (
    <li className="bg-white px-6 pb-6 rounded-xl group transition-all duration-200 scale-50 zoom__animate hover:opacity-90">
      <Link href={`${job.id}`}>
        <figure
          className="w-12 h-12 rounded-lg border -mt-6 ml-4"
          style={{
            background: job?.logoBackground,
          }}
        >
          <Image
            src={job?.logo}
            alt={job?.company}
            width={50}
            height={50}
            className="w-full h-full object-contain p-1"
          />
        </figure>

        <JobIntro singleJobPosting={job} />

        <p className="text-blue-600 font-semibold mt-16">{job?.location}</p>
      </Link>
    </li>
  );
}
