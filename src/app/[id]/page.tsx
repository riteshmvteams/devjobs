"use client";

import ComapnyDetails from "@/components/ComapnyDetails";
import ExtraInfo from "@/components/ExtraInfo";
import JobDescription from "@/components/JobDescription";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

type Param = {
  id: number;
};

type Props = {
  params: Param;
};

export default function SingleJobDetail({ params }: Props) {
  const jobs = useSelector((state: RootState) => state?.job?.jobData);
  const singleJobPosting = jobs?.filter((job) => job?.id === +params?.id)[0];

  return (
    <main className="flex flex-col min-h-screen">
      <ComapnyDetails singleJobPosting={singleJobPosting} />
      <JobDescription singleJobPosting={singleJobPosting} />
      <ExtraInfo singleJobPosting={singleJobPosting} />
    </main>
  );
}
