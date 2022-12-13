"use client";
import { Menu } from "@headlessui/react";
import { FaChevronDown, FaJava } from "react-icons/fa";

import React, { useState } from "react";
import Link from "next/link";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-100 text-sm font-medium text-gray-700 hover:bg-gray-500 focus:outline-nome focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        Options Menu
        <FaChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </button>

      {/* Menu Items */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-green-100 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            <Link
              href="/dashboard"
              className="group flex items-center px-4 py-2 t3xt-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            >
              <FaJava
                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white"
                aria-hidden="true"
              />
              Dashboard
            </Link>
            <Link
              href="/accountsAndCompletion"
              className="group flex items-center px-4 py-2 t3xt-sm text-gray-700 hover:bg-indigo-500 hover:text-white"
            >
              <FaJava
                className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white"
                aria-hidden="true"
              />
              Accounts Completion
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
