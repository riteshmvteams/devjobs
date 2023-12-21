"use client";

import { changeTheme } from "@/store/features/jobSlice";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ToggleSwitch() {
  const theme = useSelector((state: RootState) => state?.job?.theme);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(theme === "dark" ? true : false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
    dispatch(changeTheme({}));
  };

  useEffect(() => {
    document.documentElement.className = theme!;
  }, [theme]);

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
