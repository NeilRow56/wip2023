import React from "react";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <nav className="flex w-full shadow-md mb-5 py-2">
      <div className="flex w-full justify-between items-center mx-10 px-10">
        <div className="w-[100px] bg-blue-100 rounded-full border border-gray-200  ">
          Logo
        </div>
        <div className="w-[500px]">
          <h2 className="text-blue-700 font-semibold text-3xl">
            Wages and Salaries Lead Schedule
          </h2>
        </div>

        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Navbar;
