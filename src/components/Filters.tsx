"use client";

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type FilterDetails = {
  title: string;
  location: string;
  fullTime: boolean | string;
};

export default function Filters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [filterDetails, setFilterDetails] = useState<FilterDetails>({
    title: searchParams.get("title")?.toString() || "",
    location: searchParams.get("location")?.toString() || "",
    fullTime:
      searchParams.get("fulltime")?.toString() &&
      searchParams.get("fulltime")?.toString() === "true"
        ? true
        : false || false,
  });

  const inputSearch = (value: string, name: string) => {
    setFilterDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFullTime = (fullTime: boolean | string) => {
    setFilterDetails((prev) => ({ ...prev, fullTime: !fullTime }));
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (filterDetails.title !== "") {
      params.set("title", filterDetails.title);
    } else {
      params.delete("title");
    }
    if (filterDetails.location !== "") {
      params.set("location", filterDetails.location);
    } else {
      params.delete("location");
    }
    params.set("fulltime", filterDetails.fullTime.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className=" bg-white rounded-lg relative -top-10 grid grid-cols-3 shadow-sm px-4 dark:bg-[#19202D]">
      <div className="border-r border-r-gray-200 py-4 relative px-4 dark:border-r-gray-700">
        <input
          name="title"
          type="text"
          className="w-full py-4 outline-none pl-11 pr-4 placeholder:text-gray-400 font-medium text-lg bg-transparent dark:text-white"
          placeholder="Filter by title, companies, expertise.."
          // defaultValue={searchParams.get("title")?.toString()}
          onChange={(e) => inputSearch(e.target.value, e.target.name)}
          value={filterDetails.title}
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
          name="location"
          type="text"
          className="w-full py-4 outline-none pl-11 pr-4 placeholder:text-gray-400 font-medium text-lg bg-transparent dark:text-white"
          placeholder="Filter by Location.."
          // defaultValue={searchParams.get("location")?.toString()}
          onChange={(e) => inputSearch(e.target.value, e.target.name)}
          value={filterDetails.location}
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
            onClick={() => handleFullTime(filterDetails?.fullTime)}
          >
            <span
              className={`block h-7 w-7 rounded-md  transition-all duration-200 ${
                filterDetails?.fullTime
                  ? "bg-blue-500"
                  : "bg-[#E7E8E9] group-hover:bg-blue-100"
              }`}
            >
              {filterDetails?.fullTime ? (
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
        <Button onClick={handleSearch} className="bg-[#5964E0] text-white">
          Search
        </Button>
      </div>
    </div>
  );
}
