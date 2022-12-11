import React from "react";

const PlanningReviewChecklist = () => {
  return (
    <div className="min-h-screen bg-gray-200 max-w-[1400px] flex flex-col pt-2  mx-auto rounded-lg">
      <div className="">
        <h2 className=" text-center text-3xl font-extrabold text-blue-700 pt-1">
          Planning Review Checklist
        </h2>
      </div>

      <div className="mt-5 mx-auto  w-[1000px] ">
        <div className="bg-white py-4 px-3 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-3" action="#" method="POST">
            {/* form section 1 starts */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <span className="text-xl font-bold">
                  Ensure permanent information includes:
                </span>
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    {" "}
                    An appropriate and up to date letter of engagement, in
                    accordance with AAF02/10.
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <label
                    htmlFor="radioDefault2"
                    className="inline-block tet-gray-800"
                  >
                    <h4 className="font-bold text-blue-700">Yes</h4>
                  </label>
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault1"
                    name="b11"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <label
                    htmlFor="radioDefault2"
                    className="inline-block tet-gray-800"
                  >
                    <h4 className="font-bold text-blue-700">No</h4>
                  </label>

                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault2"
                    name="b11"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* form section 1 ends */}
            {/* form section 1a start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    {" "}
                    Client details including nature of business, personnel,
                    accounting records on CG5 and &apos;Know your client
                    checklist&apos;.
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b11a"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b11a"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 1a end */}
            {/* form section 1b start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>Laws and regulations relevant to the client.</h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b11b"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b11b"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 1b end */}
            {/* form section 1c start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Any independence issues, together with reasons that the firm
                    acts for the client.
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b11c"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b11c"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 1c end */}
            {/* form section 2 starts */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <span className="text-xl font-bold">
                  Money laundering risk assessment and client due diligence:
                </span>
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Confirm that we fully understand the ownership and control
                    structure of the company, including beneficial ownership.
                    List all beneficial owners with 25% or more of voting
                    rights.
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <label
                    htmlFor="radioDefault2"
                    className="inline-block tet-gray-800"
                  >
                    <h4 className="font-bold text-blue-700">Yes</h4>
                  </label>
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault1"
                    name="b112"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <label
                    htmlFor="radioDefault2"
                    className="inline-block tet-gray-800"
                  >
                    <h4 className="font-bold text-blue-700">No</h4>
                  </label>

                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault2"
                    name="b112"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* form section 2 ends */}
            {/* form section 2b start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Since we last carried out work for the client, consider
                    whether: the client has undergone significant change; or
                    there have been changes in the nature and / or extent of the
                    services we provide to them.
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b112b"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b112b"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 2b end */}
            {/* form section 2c start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Confirm that client is assessed as ‘normal’ risk and normal
                    client due diligence has been carried out. If not ‘normal’
                    risk, complete the Mercia money laundering forms.
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b112c"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b112c"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 2c end */}
            {/* form section 2d start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>Confirm correct ID is held on file for this client.</h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b112d"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b112d"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 2d end */}
            {/* form section 2e start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Establish whether there are any reasons why we should not
                    conduct this assignment (eg. insufficient expertise)
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b112e"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b112e"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 2e end */}
            {/* form section 2f start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Confirm that the company is eligible for audit exemption.
                    Complete the eligibility checklist if there is any doubt, or
                    if a member of a group.
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b112f"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b112f"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 2f end */}
            {/* form section 2g start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Carry out an analytical review of the final figures, if
                    analysis needed in accordance with firms policy, file on A71
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b112g"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b112g"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 2g end */}
            {/* form section 2h start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Has going concern been considered? Is there a going concern
                    note in accounts if net liabilities?
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b112h"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b112h"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 2h end */}
            {/* form section 2i start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Consider need for disclosure checklist (ie major changes or
                    first year)
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b112i"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b112i"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 2i end */}
            {/* form section 2j start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Ensure correct accountant’s report is included with accounts
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b112j"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b112j"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 2j end */}
            {/* form section 2k start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Schedule any outstanding points for the fee earner’s
                    attention on A25
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b112k"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b112k"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 2k end */}
            {/* form section 2l start */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4>
                    Consider whether a letter of representation is required, if
                    so file on A51
                  </h4>
                </text>
              </div>
              <div className=" gap-10 items-center   flex  pl-20">
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Active"
                    id="radioDefault3"
                    name="b112l"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
                <div className="form-check flex flex-col">
                  <input
                    type="radio"
                    value="Inactive"
                    id="radioDefault4"
                    name="b112l"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-red-500 checked:border-red-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            {/* Form section 2l end */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlanningReviewChecklist;
