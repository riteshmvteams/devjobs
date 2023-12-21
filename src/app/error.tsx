"use client";

import Button from "@/components/Button";
import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-[50vh] flex flex-col gap-4 items-center justify-center">
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try Again</Button>
    </div>
  );
}
