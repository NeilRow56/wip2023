"use client";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import Table from "./Table";

const Dashboard = () => {
  return (
    <>
      <title>Dashboard</title>
      <main>
        <h1 className="text-4xl font-semibold text-center text-blue-700 mt-5">
          Accounts Summary
        </h1>
        <div className="container mx-auto flex justify-between py-6  ">
          <div className="ml-[120px] flex  border-b pb-3 w-full">
            <div className="left flex gap-3 ">
              <button className="flex text-white bg-green-700 rounded-md px-2 py-1 border hover:bg-gray-50 hover:border-blue-700 hover:text-blue-700 items-center ">
                Add Data{" "}
                <span className="px-3 ">
                  <BsPlusCircle size={18} />{" "}
                </span>
              </button>
            </div>
          </div>
          {/* collapsible form */}

          {/* table */}
        </div>
        <div className="container mx-auto">
          <div className="ml-[120px]">
            <Table />
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
