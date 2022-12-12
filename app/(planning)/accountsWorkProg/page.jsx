import React from "react";

const AccountsWorkProg = () => {
  return (
    <div className="min-h-screen bg-gray-200 max-w-[1400px] flex flex-col pt-2  mx-auto rounded-lg">
      <div className="">
        <h2 className=" text-center text-3xl font-extrabold text-blue-700 pt-1">
          Accounts Work Programme
        </h2>
      </div>

      <div className="mt-5 mx-auto  w-[1000px] ">
        <div className="bg-white py-4 px-3 shadow rounded-lg sm:px-10">
          <form className="mb-0 space-y-3" action="#" method="POST">
            {/* form section 1 starts */}
            <div className="flex justify-between min-w-[950px]">
              <div className="mt-1 ">
                <span className="text-xl font-bold">
                  Audit Exemption / Assurance Programme.
                </span>
                <p>
                  Schedule the accounts preparation work undertaken together
                  with analytical review which enables the accounts to be
                  compiled. Where applicable, schedule the assurance work
                  undertaken which enables an assurance report to be issued.
                </p>
                <text
                  rows="4"
                  cols="50"
                  id="manager"
                  name="manager"
                  className=" w-full h-8"
                >
                  <h4 className="font-bold text-xl">
                    Taxation, Payroll and VAT
                  </h4>
                </text>
                <form>
                  <div className="flex flex-row"></div>
                </form>
              </div>
            </div>
            {/* form section 1 ends */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountsWorkProg;
