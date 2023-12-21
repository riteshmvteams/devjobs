import { JobObj } from "@/utils/types";
import Button from "./Button";
import Image from "next/image";

type Props = {
  singleJobPosting: JobObj;
};

export default function ComapnyDetails({ singleJobPosting }: Props) {
  const { logoBackground, logo, website, company } = singleJobPosting;

  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="bg-white -mt-14 rounded-lg flex gap-2 items-center shadow-sm overflow-hidden dark:bg-[#19202D]">
        <figure
          className="w-[140px] h-[143px]"
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
        <div className="px-6 flex justify-between grow">
          <div className="flex flex-col gap-1.5">
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
