import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const depositData = [
  {
    date: '22.09.2023',
    transactionId: 'TXDFGC20RNN',
    balance: '$1200.00',
    status: 'Done',
  },
];

const DepositTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(depositData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = depositData.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="w-full">
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
            {currentData.map((item, index) => (
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

            {[...Array(itemsPerPage - currentData.length)].map((_, i) => (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end mt-4 gap-2 items-center text-sm">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            <FaArrowLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-2 text-[11px]  rounded ${
                page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default DepositTable;
