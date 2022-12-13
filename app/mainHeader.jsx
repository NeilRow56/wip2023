import React from "react";
import DropdownMenu from "./components/DropdownMenu";

const Navbar = () => {
  return (
    <nav className="flex w-full shadow-md mb-5 py-2">
      <div className="flex w-full justify-between items-center mx-10 px-10">
        <div className="w-50 bg-blue-100">Logo</div>

        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Navbar;
