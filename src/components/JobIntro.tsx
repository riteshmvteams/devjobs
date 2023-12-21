import { JobObj } from "@/utils/types";
import React from "react";

type Props = {
  singleJobPosting: JobObj;
};

export default function JobIntro({ singleJobPosting }: Props) {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <div className="flex gap-2 items-center">
        <p className="text-base text-gray-400 font-normal">
          {singleJobPosting?.postedAt}
        </p>
        <span className="block h-1 w-1 bg-gray-400 rounded-full flex-shrink-0"></span>
        <p className="text-base text-gray-400 font-normal">
          {singleJobPosting?.contract}
        </p>
      </div>

      <h2 className="text-xl font-bold text-black group-hover:text-blue-600 duration-200 transition-all">
        {singleJobPosting?.position}
      </h2>
      <p className="text-lg text-gray-400 font-medium">
        {singleJobPosting?.company}
      </p>
    </div>
  );
}
