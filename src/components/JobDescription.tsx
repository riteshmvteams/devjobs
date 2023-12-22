import { JobObj } from "@/utils/types";
import Button from "./Button";
import JobIntro from "./JobIntro";
import RequirementListing from "./RequirementListing";

type Props = {
  singleJobPosting: JobObj;
};

export default function JobDescription({ singleJobPosting }: Props) {
  return (
    <div className="px-4">
      <div className="max-w-5xl md:mx-auto w-full bg-white mt-16 mb-12 rounded-lg py-10 px-6 md:px-8 flex flex-col gap-10 dark:bg-[#19202D]">
        <div className="flex justify-between  flex-col items-start md:flex-row md:items-center gap-6 md:gap-0">
          <JobIntro singleJobPosting={singleJobPosting} />

          <Button
            className="bg-blue-500 text-white"
            as="link"
            href={singleJobPosting?.apply}
          >
            Apply Now
          </Button>
        </div>

        <p className="text-gray-500 text-sm text-justify">
          {singleJobPosting?.description}
        </p>

        <RequirementListing
          content={singleJobPosting?.requirements?.content}
          items={singleJobPosting?.requirements?.items}
          title="Requirements"
          type="bullet"
        />

        <RequirementListing
          content={singleJobPosting?.role?.content}
          items={singleJobPosting?.role?.items}
          title="What We do"
        />
      </div>
    </div>
  );
}
