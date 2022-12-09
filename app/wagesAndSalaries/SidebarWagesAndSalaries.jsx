"use client";

import Link from "next/link";
import { useState } from "react";

const SidebarWagesAndSalaries = () => {
  const [showSidebarWagesAndSalaries, setShowSidebarWagesAndSalaries] =
    useState(true);

  return (
    <>
      {showSidebarWagesAndSalaries ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-28 xl:left-36 2xl:left-40 top-3 z-50"
          onClick={() =>
            setShowSidebarWagesAndSalaries(!showSidebarWagesAndSalaries)
          }
        >
          x
        </button>
      ) : (
        <svg
          onClick={() =>
            setShowSidebarWagesAndSalaries(!showSidebarWagesAndSalaries)
          }
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0 w-[12vw] bg-blue-600  p-5  text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebarWagesAndSalaries ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <h3 className="mt-10 text-xl font-semibold text-white">Menu</h3>
        <ul className="mt-2 text-lg  text-white text-left list-disc pl-3">
          <Link href="/dashboard">
            <li>Dashboard</li>
          </Link>

          <Link href="/wagesAndSalaries">
            <li>Salaries</li>
          </Link>
          <Link href="/wagesAndSalaries">
            <li>Wages</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default SidebarWagesAndSalaries;
