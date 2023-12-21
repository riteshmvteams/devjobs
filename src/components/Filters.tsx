"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

export default function Filters() {
  const [fullTime, setFullTime] = useState(false);
  return (
    <div className=" bg-white rounded-lg relative -top-10 grid grid-cols-3 shadow-sm px-4 dark:bg-[#19202D]">
      <div className="border-r border-r-gray-200 py-4 relative px-4 dark:border-r-gray-700">
        <input
          type="text"
          className="w-full py-4 outline-none pl-11 pr-4 placeholder:text-gray-400 font-medium text-lg bg-transparent dark:text-white"
          placeholder="Filter by title, companies, expertise.."
        />
        <figure className="absolute top-1/2 -translate-y-1/2 left-5">
          <Image
            className="w-auto h-auto"
            src="/assets/desktop/icon-search.svg"
            alt="search"
            width={50}
            height={50}
          />
        </figure>
      </div>
      <div className="border-r border-r-gray-200 py-4 relative px-4 dark:border-r-gray-700">
        <input
          type="text"
          className="w-full py-4 outline-none pl-11 pr-4 placeholder:text-gray-400 font-medium text-lg bg-transparent dark:text-white"
          placeholder="Filter by Location.."
        />
        <figure className="absolute top-1/2 -translate-y-1/2 left-5">
          <Image
            className="w-auto h-auto"
            src="/assets/desktop/icon-location.svg"
            alt="search"
            width={50}
            height={50}
          />
        </figure>
      </div>
      <div className="py-4 px-4 flex justify-between items-center">
        <div>
          <button
            className="flex gap-4 group"
            onClick={() => setFullTime((prev) => !prev)}
          >
            <span
              className={`block h-7 w-7 rounded-md  transition-all duration-200 ${
                fullTime
                  ? "bg-blue-500"
                  : "bg-[#E7E8E9] group-hover:bg-blue-100"
              }`}
            >
              {fullTime ? (
                <Image
                  className="w-full h-full p-1.5"
                  src="/assets/desktop/icon-check.svg"
                  alt="check"
                  height={20}
                  width={20}
                />
              ) : null}
            </span>
            <span className="text-2xl font-semibold text-black group-hover:opacity-70 transition-all duration-200 dark:text-white">
              Full Time only
            </span>
          </button>
        </div>
        <Button className="bg-[#5964E0] text-white">Search</Button>
      </div>
    </div>
  );
}
