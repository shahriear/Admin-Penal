import React from 'react';
import { FaUserEdit, FaPenAlt, FaPenNib } from 'react-icons/fa';
import { LuCrosshair } from 'react-icons/lu';

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

const TorrityAgentList = () => {
  return (
    <div className="bg-white md:p-6 rounded">
      {/* Title + Search/Add */}
      {/* <div className="flex justify-end items-center mb-4 gap-4 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-2 w-full md:w-auto justify-center">
          <input
            type="text"
            placeholder="Search"
            className="border px-5 py-2 rounded font-dm font-[400] text-[13px] bg-[#D9D9D9] min-w-[150px]"
          />
          <button className="bg-black text-white px-3 md:font-semibold py-2 rounded text-[12px] whitespace-nowrap">
            
          </button>
        </div>
      </div> */}
      <div className="flex justify-end items-center mb-4 gap-4 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-2 w-fit md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border pr-7 md:pr-10 pl-5 py-2 rounded font-dm font-[400] text-[13px] bg-[#D9D9D9] min-w-[150px]"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-700">
              <LuCrosshair size={17} />
            </span>
          </div>

          <button className="bg-black text-white md:px-5 px-4 py-2 rounded font-dm md:font-[600] md:text-[16px] font-[600] text-[14px] whitespace-nowrap">
            Add Agent
          </button>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[850px]">
          {/* Table Head */}
          <div className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.8fr_2fr] bg-[#C3C2C2]  p-2 rounded text-center font-dm md:font-[500] md:text-[14px] font-[500] text-[10px]">
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
                className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.9fr_2fr] gap-1 items-center bg-gray-100 rounded px-2 py-2  text-center font-dm md:font-[400] md:text-[14px] font-[400] text-[10px]"
              >
                <div>{m.account}</div>
                <div>{m.password}</div>
                <div className="flex items-center justify-center gap-1">
                  {m.balance}
                  <FaPenNib className="text-gray-600 md:text-sm text-[9px] md:text-[11px] cursor-pointer ml-1" />
                </div>
                <div>
                  <span
                    className={`px-2 py-0.5 rounded text-white text-[10px] md:text-xs ${
                      m.status === 'Active' ? 'bg-green-600' : 'bg-yellow-500'
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                {/* Action buttons container */}
                <div className="flex gap-2 justify-center items-center px-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
                  <button className="min-w-[90px] bg-blue-500 text-white px-2 py-1 rounded flex items-center justify-center whitespace-nowrap font-dm md:font-[400] md:text-[12px] font-[400] text-[10px]">
                    <FaUserEdit className="mr-1" />
                    Profile Edit
                  </button>

                  <button className="min-w-[90px] bg-blue-600 text-white px-2 py-1 rounded flex items-center justify-center whitespace-nowrap font-dm md:font-[400] md:text-[12px] font-[400] text-[10px]">
                    <FaPenAlt className="mr-1" />
                    Lock Up
                  </button>

                  <button className="min-w-[110px] bg-blue-700 text-white  px-2 py-1 rounded flex items-center justify-center whitespace-nowrap font-dm md:font-[400] md:text-[12px] font-[400] text-[10px]">
                    See Agent List
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

export default TorrityAgentList;
