import React from 'react';

const withdrawData = [
  {
    date: '22.09.2023',
    transactionId: 'WXDFGH45HHM',
    balance: '$800.00',
    status: 'Pending',
  },
];

const WithdrawHistory = () => {
  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto">
        <table className="w-full table-fixed border-separate border-spacing-y-2 text-sm">
          {/* Header: only visible on mobile */}
          <thead className="md:hidden">
            <tr className="bg-[#C3C2C2] font-dm md:font-[400] md:text-[14px] font-[400] text-[10px] w-full">
              <th className="w-[25%] text-left px-2 py-2 whitespace-nowrap">
                Date
              </th>
              <th className="w-[25%] text-left px-2 py-2 whitespace-nowrap">
                Transaction ID
              </th>
              <th className="w-[25%] text-left px-2 py-2 whitespace-nowrap">
                Balance
              </th>
              <th className="w-[25%] text-left px-2 py-2 whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Mobile View Data Row */}
            <tr className="bg-[#D9D9D95E] border border-transparent text-[10px] md:hidden">
              <td className="px-2 py-2 whitespace-nowrap">
                {withdrawData[0].date}
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                {withdrawData[0].transactionId}
              </td>
              <td className="px-2 py-2 whitespace-nowrap">
                {withdrawData[0].balance}
              </td>
              <td className="px-2 py-2 whitespace-nowrap text-red-600">
                {withdrawData[0].status}
              </td>
            </tr>

            {/* Empty Rows: visible on all views */}
            {[...Array(11)].map((_, i) => (
              <tr
                key={`empty-${i}`}
                className="bg-[#D9D9D95E] h-10 border border-transparent"
              >
                <td colSpan="4"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawHistory;
