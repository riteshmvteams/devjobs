import { JobObj } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

        <div className="flex flex-col gap-2 mt-6">
          <div className="flex gap-2 items-center">
            <p className="text-base text-gray-400 font-normal">
              {job?.postedAt}
            </p>
            <span className="block h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
            <p className="text-base text-gray-400 font-normal">
              {job?.contract}
            </p>
          </div>

          <h2 className="text-xl font-bold text-black group-hover:text-blue-600 duration-200 transition-all">
            {job?.position}
          </h2>
          <p className="text-lg text-gray-400 font-medium">{job?.company}</p>
        </div>

        <p className="text-blue-600 font-semibold mt-16">{job?.location}</p>
      </Link>
    </li>
  );
}
