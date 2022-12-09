"use client";

import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-28 xl:left-36 2xl:left-40 top-3 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
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
          showSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <h3 className="mt-10 text-xl font-semibold text-white">Menu</h3>
        <ul className="mt-2 text-lg  text-white text-left list-disc pl-3 ">
          <li className="mb-3">
            <Link href="/initialDataInput">Initial data input</Link>
          </li>
          <li className="mb-3">
            <Link href="/accountsAndCompletion">Accounts and Completion</Link>
          </li>
          <li className="mb-3">
            <Link href="/dashboard">Dashboard</Link>
          </li>

          <li className="mb-3">
            <Link href="/planning">Planning</Link>
          </li>
          <Link href="/taxation">
            <li className="mb-3">Taxation</li>
          </Link>

          <Link href="/relatedParties">
            <li className="mb-3">Related Parties </li>
          </Link>
          <Link href="/fixedAssets">
            <li className="mb-3">Fixed Assets</li>
          </Link>
          <Link href="/stocks">
            <li className="mb-3">Stocks</li>
          </Link>

          <Link href="/salesAndDebtors">
            <li className="mb-3">Sales and Debtors</li>
          </Link>
          <Link href="/cashAndBank">
            <li className="mb-3">Cash and Bank</li>
          </Link>

          <Link href="/liabilitiesAndCharges">
            <li className="mb-3">Provision for Liabilities and Charges </li>
          </Link>
          <Link href="/shareCapital">
            <li className="mb-3">
              Shares Capital, Reserves and Statutory Information
            </li>
          </Link>
          <Link href="/wagesAndSalaries">
            <li className="mb-3">Wages and Salaries</li>
          </Link>

          <Link href="/trialbalanceAndJournals">
            <li className="mb-3">Trial Balance, Journals etc; </li>
          </Link>
          <Link href="/vat">
            <li className="mb-3">VAT</li>
          </Link>
          <Link href="/drawings">
            <li className="mb-3">Drawings and Capital Introduced</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
