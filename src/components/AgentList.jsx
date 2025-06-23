import React from 'react';
import { FaUserEdit, FaPenAlt } from 'react-icons/fa';

const members = [
  {
    account: '01773647834',
    password: '@#boomST25@#',
    balance: '$12,000.00',
    status: 'Active',
    blocked: false,
  },
  {
    account: '01773647834',
    password: '@#boomST25@#',
    balance: '$12,000.00',
    status: 'Active',
    blocked: false,
  },
];

const AgentList = () => {
  return (
    <div className="bg-white md:p-6 rounded">
      {/* Title + Search/Add */}
      <div className="flex justify-end items-center mb-4 gap-4 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-2 w-full md:w-auto justify-center">
          <input
            type="text"
            placeholder="Search"
            className="border px-5 py-2 rounded text-sm bg-[#D9D9D9] min-w-[150px]"
          />
          <button className="bg-black text-white px-3 md:font-semibold py-2 rounded text-[12px] whitespace-nowrap">
            Add TeritorryAgent
          </button>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[850px]">
          {/* Table Head */}
          <div className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.8fr_2fr] bg-gray-200 font-semibold text-[10px] md:text-sm p-2 rounded text-center">
            <div>ID</div>
            <div>Password</div>
            <div>Balance</div>
            <div>Status</div>
            <div className="px-10">Action</div>
          </div>

          {/* Table Body */}
          <div className="space-y-2 mt-2">
            {members.map((m, index) => (
              <div
                key={index}
                className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.9fr_2fr] gap-1 items-center bg-gray-100 rounded px-2 py-2 text-[10px] md:text-sm text-center"
              >
                <div>{m.account}</div>
                <div>{m.password}</div>
                <div>{m.balance}</div>
                <div>
                  <span
                    className={`px-2 py-0.5 rounded text-white text-[10px] md:text-xs ${
                      m.status === 'Active' ? 'bg-green-600' : 'bg-yellow-500'
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <div className="flex gap-1 justify-center items-center flex-wrap px-10">
                  <button className="min-w-[90px] bg-blue-500 text-white text-[10px] px-2 py-1 rounded flex items-center justify-center whitespace-nowrap md:text-[11px]">
                    <FaUserEdit className="mr-1 md:text-base text-[10px]" />
                    Profile Edit
                  </button>

                  <button className="min-w-[90px] bg-blue-600 text-white font-semibold text-[10px] px-2 py-1 rounded flex items-center justify-center whitespace-nowrap md:text-[11px]">
                    <FaPenAlt className="mr-1 md:text-sm" />
                    Lock Up
                  </button>
                </div>
              </div>
            ))}

            {/* Dummy Rows */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 h-8 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentList;
