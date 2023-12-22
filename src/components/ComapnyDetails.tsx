import { JobObj } from "@/utils/types";
import Button from "./Button";
import Image from "next/image";

type Props = {
  singleJobPosting: JobObj;
};

export default function ComapnyDetails({ singleJobPosting }: Props) {
  const { logoBackground, logo, website, company } = singleJobPosting;

  return (
    <div className="max-w-5xl mx-auto w-full px-4">
      <div className="bg-white -mt-6 md:-mt-14 rounded-lg flex items-center shadow-sm md:overflow-hidden dark:bg-[#19202D] flex-col md:flex-row gap-6 md:gap-2 pb-6 md:pb-0">
        <figure
          className="w-16 h-16 -mt-8 md:mt-0 md:w-[140px] md:h-[143px] rounded-lg md:rounded-none"
          style={{
            background: logoBackground,
          }}
        >
          <Image
            src={logo}
            alt={company}
            width={140}
            height={143}
            className="w-full h-full object-contain p-3"
          />
        </figure>
        <div className="px-6 flex justify-between grow flex-col md:flex-row items-center gap-4 md:gap-0">
          <div className="flex flex-col gap-1.5 items-center md:items-start">
            <h2 className="text-2xl font-semibold text-black dark:text-white">
              {company}
            </h2>
            <p className="text-gray-400">{website}</p>
          </div>
          <Button
            as="link"
            href={website}
            className="text-blue-600 bg-blue-100"
          >
            Company Site
          </Button>
        </div>
      </div>
    </div>
  );
}
