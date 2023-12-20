"use client";

import { useState } from "react";

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <button
      className="relative w-12 h-6 rounded-full bg-white cursor-pointer hover:opacity-80 duration-300 transition-all"
      onClick={handleToggle}
    >
      <span
        className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full duration-300 transition-all ${
          toggle
            ? "left-[calc(100%-22px)] bg-[#6771E3]"
            : "left-0.5 bg-gray-400"
        }`}
      ></span>
    </button>
  );
}
