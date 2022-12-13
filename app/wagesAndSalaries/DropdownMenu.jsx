"use client";
import { Menu } from "@headlessui/react";
import { FaChevronDown, FaJava } from "react-icons/fa";

import React from "react";
import Link from "next/link";

const DropdownMenu = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-100 text-sm font-medium text-gray-700 hover:bg-gray-500 hover:text-white  focus:outline-nome focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        // onClick={() => setIsOpen(!isOpen)}
      >
        Options Menu
        <FaChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </Menu.Button>

      {/* Menu Items */}
      {/* {isOpen && ( */}
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-green-100 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/wagesAndSalaries"
                className={` flex items-center px-4 py-2 text-sm ${
                  active ? "  bg-indigo-500 text-white" : "text-gray-700"
                }`}
              >
                <FaJava
                  className={`mr-3 h-5 w-5 ${
                    active ? "text-white" : "text-gray-400"
                  }`}
                  aria-hidden="true"
                />
                Salaries Lead Schedule
              </Link>
            )}
          </Menu.Item>
          <hr />
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/dashboard"
                className={` flex items-center px-4 py-2 text-sm ${
                  active ? "  bg-indigo-500 text-white" : "text-gray-700"
                }`}
              >
                <FaJava
                  className={`mr-3 h-5 w-5 ${
                    active ? "text-white" : "text-gray-400"
                  }`}
                  aria-hidden="true"
                />
                Dashboard
              </Link>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
      {/* )} */}
    </Menu>
  );
};

export default DropdownMenu;
