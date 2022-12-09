import Image from "next/image";
import Link from "next/link";
import React from "react";

const DataSummaryPage = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col pt-2  px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h2 className=" text-center text-3xl font-extrabold text-blue-700 pt-1">
          Initial Data Input
        </h2>
      </div>

      <div className="mt-2 mx-auto w-[800px]">
        <div className="bg-white py-4 px-3 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-3" action="#" method="POST">
            <div>
              <label
                htmlFor="business_name"
                className="block text-sm font-medium text-gray-700 "
              >
                <h4 className=" text-lg text-blue-700">Client name</h4>
              </label>
              <div className="mt-1">
                <input
                  id="business_name"
                  name="business_name"
                  type="text"
                  required
                  className="border border-gray-200 rounded-lg w-full px-4 h-8  "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="company-size"
                className="block text-sm font-medium text-gray-700"
              >
                <h4 className=" text-lg text-blue-700">Entity type</h4>
              </label>
              <div className="mt-1 h-8">
                <select name="company-size" id="company-size" className="">
                  <option value="">Please select</option>
                  <option value="small">Soletrader</option>
                  <option value="medium">Partnership</option>
                  <option value="large">Limited company</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="period_start_date"
                className="block text-sm font-medium text-gray-700 "
              >
                <h4 className=" text-lg text-blue-700">
                  Current period end date
                </h4>
              </label>
              <div className="mt-1">
                <input
                  id="period_end_date"
                  name="period_end_date"
                  type="date"
                  required
                  className="border border-gray-200 rounded-lg w-full h-8"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="period_start_date"
                className="block text-sm font-medium text-gray-700 "
              >
                <h4 className=" text-lg text-blue-700">
                  Current period start date
                </h4>
              </label>
              <div className="mt-1">
                <input
                  id="period_start_date"
                  name="period_start_date"
                  type="date"
                  required
                  className="border border-gray-200 rounded-lg w-full h-8"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="current_period_heading"
                className="block text-sm font-medium text-gray-700 "
              >
                <h4 className=" text-lg text-blue-700">
                  Current period heading (e.g. 2022)
                </h4>
              </label>
              <div className="mt-1">
                <input
                  id="current_period_heading"
                  name="current_period_heading"
                  type="text"
                  required
                  className="border border-gray-200 rounded-lg w-full h-8"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="comparative_period_heading"
                className="block text-sm font-medium text-gray-700 "
              >
                <h4 className=" text-lg text-blue-700">
                  Comparative period heading (e.g. 2021)
                </h4>
              </label>
              <div className="mt-1">
                <input
                  id="comparative_period_heading"
                  name="comparative_period_heading"
                  type="text"
                  required
                  className="border border-gray-200 rounded-lg w-full h-8"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="tax_reference"
                className="block text-sm font-medium text-gray-700 "
              >
                <h4 className=" text-lg text-blue-700">Tax reference</h4>
              </label>
              <div className="mt-1">
                <input
                  id="tax_reference"
                  name="tax_reference"
                  type="text"
                  className="border border-gray-200 rounded-lg w-full h-8"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="fee_earner"
                className="block text-sm font-medium text-gray-700 "
              >
                <h4 className=" text-lg text-blue-700">Fee earner</h4>
              </label>
              <div className="mt-1">
                <input
                  id="fee_earner"
                  name="fee_earner"
                  type="text"
                  required
                  className="border border-gray-200 rounded-lg w-full h-8"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="manager"
                className="block text-sm font-medium text-gray-700 "
              >
                <h4 className=" text-lg text-blue-700">Manager</h4>
              </label>
              <div className="mt-1">
                <input
                  id="manager"
                  name="manager"
                  type="text"
                  required
                  className="border border-gray-200 rounded-lg w-full h-8"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company-size"
                className="block text-sm font-medium text-gray-700"
              >
                <h4 className=" text-lg text-blue-700">Company size</h4>
              </label>
              <div className=" h-8">
                <select name="company-size" id="company-size" className="">
                  <option value="">Please select</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="currency"
                className="block text-sm font-medium text-gray-700"
              >
                <h4 className=" text-lg text-blue-700">Currency</h4>
              </label>
              <div className=" h-8">
                <select name="company-size" id="company-size" className="">
                  <option value="">Please select</option>
                  <option value="pound">£</option>
                  <option value="dollar">$</option>
                  <option value="euro">€</option>
                </select>
              </div>
            </div>

            {/* <div className="flex items-center">
              <input
                id="complete"
                name="complete"
                type="checkbox"
                className=""
              />
              <label
                htmlFor="complete"
                className="ml-2 block text-sm text-gray-900"
              >
                <h4 className=" text-lg text-blue-700">Completed</h4>
              </label>
            </div> */}

            <div className="">
              <button
                type="submit"
                className="w-full flex justify-center py-1  px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white  bg-blue-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataSummaryPage;
