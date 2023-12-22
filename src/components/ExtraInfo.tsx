import { JobObj } from "@/utils/types";
import Button from "./Button";

type Props = {
  singleJobPosting: JobObj;
};

export default function ExtraInfo({ singleJobPosting }: Props) {
  const { company, position, apply } = singleJobPosting;
  return (
    <footer className="bg-white mt-auto py-10 dark:bg-[#19202D] px-6">
      <div className="max-w-5xl mx-auto w-full flex justify-between flex-col md:flex-row items-center gap-8 md:gap-0">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <h2 className="font-bold text-2xl text-black dark:text-white text-center">
            {position}
          </h2>
          <p className="text-gray-400 text-lg font-medium"> {company}</p>
        </div>
        <Button className="bg-blue-600 text-white" as="link" href={apply}>
          Apply Now
        </Button>
      </div>
    </footer>
  );
}
