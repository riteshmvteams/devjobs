"use client";

import Link, { LinkProps } from "next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: string;
  href?: any;
};

export default function Button({
  children,
  className,
  onClick,
  as,
  href,
}: Props) {
  if (as === "link") {
    return (
      <Link
        target="_blank"
        href={href}
        className={`px-6 py-4 hover:opacity-80 duration-300 transition-all font-bold tracking-wider text-lg w-max rounded-lg ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`px-6 py-4 hover:opacity-80 duration-300 transition-all font-bold tracking-wider text-lg w-max rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}
