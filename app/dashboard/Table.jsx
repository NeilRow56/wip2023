import React from "react";

const Table = () => {
  return (
    <>
      {/* Limited company */}
      <div>
        <table className="table-fixed">
          <thead className="text-center">
            <tr>
              <th className=" text-left w-[600px]">Balance Sheet</th>
              <th>Current</th>
              <th>Prior</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td></td>
              <td>£</td>
              <td>£</td>
            </tr>
            <tr>
              <td>Fixed Assets - tangible</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">10,000,000</td>
            </tr>
            <tr>
              <td>Fixed Assets - intangible</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">10,000,000</td>
            </tr>
            <tr>
              <td>Investments</td>
              <td className="text-right w-[100px]">8000000</td>
              <td className="text-right w-[100px] text-red-700">10,000,000</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td className="text-right w-[100px]">120000</td>
              <td className="text-right w-[100px]  text-red-700">10,000,000</td>
            </tr>
            <tr>
              <td>Debtors</td>
              <td className="text-right w-[100px]">12000</td>
              <td className="text-right w-[100px] text-red-700">10,000,000</td>
            </tr>
            <tr>
              <td>Bank and cash</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">100000</td>
            </tr>
            <tr>
              <td>Creditors - less than one year</td>
              <td className="text-right w-[100px]">10000000</td>
              <td className="text-right w-[100px] text-red-700">10,000,000</td>
            </tr>
            <tr>
              <td>Creditors - more than one year</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">10,000,000</td>
            </tr>
            <tr>
              <td>Provisions</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px]  text-red-700">10,000,000</td>
            </tr>
            <tr>
              <td>Profit and loss acount</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">10,000,000</td>
            </tr>
            <tr>
              <td>Other reserves</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">10,000,000</td>
            </tr>
            <tr>
              <td>Share capital</td>
              <td className="text-right w-[100px]">50000</td>
              <td className="text-right w-[100px] text-red-700">50000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Trading Account */}
      <div className="mt-10">
        <table className="table-fixed">
          <thead className="text-center">
            <tr>
              <th className=" text-left w-[600px]">Trading Account</th>
              <th>Current</th>
              <th>Prior</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td></td>
              <td>£</td>
              <td>£</td>
            </tr>
            <tr>
              <td>Sales</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">10,000,000</td>
            </tr>
            <tr>
              <td>Miscellaneous Income</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">1400</td>
            </tr>
            <tr>
              <td>Cost of Sales</td>
              <td className="text-right w-[100px]">8000000</td>
              <td className="text-right w-[100px] text-red-700">10000</td>
            </tr>
            <tr>
              <td>Overhead</td>
              <td className="text-right w-[100px]">120000</td>
              <td className="text-right w-[100px]  text-red-700">102000</td>
            </tr>
            <tr>
              <td>Net Profit/Loss</td>
              <td className="text-right w-[100px]">120000</td>
              <td className="text-right w-[100px]  text-red-700">102000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Sole trader or partnership */}
      {/* <div className="">
        <table className="table-fixed">
          <thead className="text-center">
            <tr>
              <th className=" text-left w-[600px]">Balance Sheet</th>
              <th>Current</th>
              <th>Prior</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td></td>
              <td>£</td>
              <td>£</td>
            </tr>
            <tr>
              <td>Fixed Assets - tangible</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">1000</td>
            </tr>
            <tr>
              <td>Fixed Assets - intangible</td>
              <td className="text-right w-[100px]">0</td>
              <td className="text-right w-[100px] text-red-700">0</td>
            </tr>
            <tr>
              <td>Stock</td>
              <td className="text-right w-[100px]">1200</td>
              <td className="text-right w-[100px]  text-red-700">1000</td>
            </tr>
            <tr>
              <td>Debtors</td>
              <td className="text-right w-[100px]">12000</td>
              <td className="text-right w-[100px] text-red-700">10,00</td>
            </tr>
            <tr>
              <td>Bank and cash</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">10</td>
            </tr>
            <tr>
              <td>Creditors - less than one year</td>
              <td className="text-right w-[100px]">105</td>
              <td className="text-right w-[100px] text-red-700">425</td>
            </tr>
            <tr>
              <td>Creditors - more than one year</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">825</td>
            </tr>
            <tr>
              <td>Capital Account(s)</td>
              <td className="text-right w-[100px]">1256</td>
              <td className="text-right w-[100px] text-red-700">689</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </>
  );
};

export default Table;
