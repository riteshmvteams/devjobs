import { JobObj } from "@/utils/types";
import Button from "./Button";
import JobIntro from "./JobIntro";

type Props = {
  singleJobPosting: JobObj;
};

export default function JobDescription({ singleJobPosting }: Props) {
  console.log(singleJobPosting);

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

      <div className="text-gray-500">{singleJobPosting?.description}</div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Requirements</h2>
        <p className="text-gray-500">
          {singleJobPosting?.requirements?.content}
        </p>

        <ul className="flex flex-col gap-3 ">
          {singleJobPosting?.requirements?.items?.map((item, index) => {
            return (
              <li key={index} className="flex gap-4 items-center">
                <span className="block w-1 h-1 rounded-full bg-gray-400 flex-shrink-0"></span>
                <p className="text-gray-500">{item}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">What We do</h2>
        <p className="text-gray-500">{singleJobPosting?.role?.content}</p>

        <ul className="flex flex-col gap-4 items-start">
          {singleJobPosting?.role?.items?.map((item, index) => {
            return (
              <li key={index} className="flex gap-4 items-start">
                <span className="block text-blue-600 font-semibold flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-500">{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
