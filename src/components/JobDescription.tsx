import { JobObj } from "@/utils/types";
import Button from "./Button";
import JobIntro from "./JobIntro";
import RequirementListing from "./RequirementListing";

type Props = {
  singleJobPosting: JobObj;
};

export default function JobDescription({ singleJobPosting }: Props) {
  return (
    <div className="max-w-5xl mx-auto w-full bg-white mt-16 mb-12 rounded-lg py-10 px-8 flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <JobIntro singleJobPosting={singleJobPosting} />

        <Button
          className="bg-blue-500 text-white"
          as="link"
          href={singleJobPosting?.apply}
        >
          Apply Now
        </Button>
      </div>

      <p className="text-gray-500">{singleJobPosting?.description}</p>

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
  );
}
