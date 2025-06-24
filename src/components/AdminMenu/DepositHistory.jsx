import React from 'react';

const depositData = [
  {
    date: '22.09.2023',
    transactionId: 'TXDFGC20RNN',
    balance: '$1200.00',
    status: 'Done',
  },
];

const DepositTable = () => {
  return (
    <div className="w-full ">
      <div className="w-full overflow-x-auto">
        <table className="w-full table-fixed border-separate border-spacing-y-2 text-sm">
          <thead>
            <tr className="bg-[#C3C2C2] font-dm md:font-[500] md:text-[14px] font-[500] text-[10px]">
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
            {/* Data Row */}
            {depositData.map((item, index) => (
              <tr
                key={index}
                className="bg-[#D9D9D95E] border border-transparent font-dm md:font-[400] md:text-[14px] font-[400] text-[10px]"
              >
                <td className="px-2 py-2 whitespace-nowrap">{item.date}</td>
                <td className="px-2 py-2 whitespace-nowrap">
                  {item.transactionId}
                </td>
                <td className="px-2 py-2 whitespace-nowrap">{item.balance}</td>
                <td className="px-2 py-2 whitespace-nowrap text-green-600">
                  {item.status}
                </td>
              </tr>
            ))}

            {/* Empty Rows */}
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

export default DepositTable;
