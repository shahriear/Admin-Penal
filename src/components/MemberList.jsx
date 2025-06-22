import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { FaPenAlt } from 'react-icons/fa';

const members = [
  {
    account: '01773647834',
    password: '@#boomST25@#',
    balance: '$12,000.00',
    status: 'Active',
    agent: '1722350',
    blocked: false,
  },
  {
    account: '01773647834',
    password: '@#boomST25@#',
    balance: '$12,000.00',
    status: 'Blocked',
    agent: '1722350',
    blocked: true,
  },
  // Add more members...
];

const MemberList = () => {
  return (
    <div className="bg-white  md:p-6 rounded">
      {/* Title + Search/Add */}
      <div className="flex justify-end items-center mb-4 gap-4 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-2 w-full md:w-auto justify-end">
          <input
            type="text"
            placeholder="Search"
            className="border px-5 py-2 rounded text-sm bg-[#D9D9D9] min-w-[150px]"
          />
          <button className="bg-black text-white px-5 py-2 rounded text-sm whitespace-nowrap">
            Add User
          </button>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-auto">
        <div className="min-w-[530px]">
          {/* Table Head */}
          <div className="grid grid-cols-6 bg-gray-200 font-semibold text-[10px] md:text-sm p-2 rounded">
            <div>Account</div>
            <div>Password</div>
            <div>Balance</div>
            <div>Status</div>
            <div>Agent Number</div>
            <div className="text-center">Action</div>
          </div>

          {/* Table Body */}
          <div className="space-y-2 mt-2">
            {members.map((m, index) => (
              <div
                key={index}
                className="grid grid-cols-6 gap-1 items-center bg-gray-100 rounded p-2 text-[10px] md:text-sm"
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
                <div>{m.agent}</div>
                <div className="flex gap-1 justify-center">
                  <button className="bg-blue-500 text-white text-[9px] px-1 py-1 rounded whitespace-nowrap flex items-center md:text-[11px] md:py-2 md:px-2">
                    <FaUserEdit className="mr-1 md:text-base text-[10px]" />
                    Profile Edit
                  </button>
                  {!m.blocked && (
                    <button className="bg-blue-600 text-white text-[9px] px-1 py-1 rounded whitespace-nowrap mr-6 md:text-[11px] md:py-2 md:px-2 flex items-center">
                      <FaPenAlt className="mr-1 md:text-sm" />
                      Lock Up
                    </button>
                  )}
                  {m.blocked && (
                    <button className="bg-yellow-500 text-black font-semibold text-[9px] md:text-[11px] md:py-2 md:px-2 px-1 py-1 rounded whitespace-nowrap mr-4">
                      UnBlock
                    </button>
                  )}
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

      {/* Pagination */}
      {/* <div className="flex justify-center items-center mt-4 text-xs">
        <span className="cursor-pointer px-2">{'←'}</span>
        <span className="px-2">03</span>
        <span className="cursor-pointer px-2">{'→'}</span>
      </div> */}
    </div>
  );
};

export default MemberList;
