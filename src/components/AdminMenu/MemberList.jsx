import React, { useState } from 'react';
import { FaUserEdit, FaPenAlt } from 'react-icons/fa';
import { LuCrosshair } from 'react-icons/lu';
import { FaPenNib } from 'react-icons/fa';
import LockConfirmModal from '../MemberList/LockConfirmModal';
import UnblockConfirmModal from '../MemberList/UnblockConfirmModal';

const MemberList = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      account: '01773647834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      agent: '1722350',
      blocked: false,
    },
    {
      id: 2,
      account: '01773647834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Blocked',
      agent: '1722350',
      blocked: true,
    },
  ]);

  const [selectedMember, setSelectedMember] = useState(null);
  const [lockModalOpen, setLockModalOpen] = useState(false);
  const [unblockModalOpen, setUnblockModalOpen] = useState(false);

  const handleBlock = member => {
    setSelectedMember(member);
    setLockModalOpen(true);
  };

  const handleUnblock = member => {
    setSelectedMember(member);
    setUnblockModalOpen(true);
  };

  const confirmBlock = () => {
    setMembers(prev =>
      prev.map(m =>
        m.id === selectedMember.id
          ? { ...m, blocked: true, status: 'Blocked' }
          : m
      )
    );
    setLockModalOpen(false);
    setSelectedMember(null);
  };

  const confirmUnblock = () => {
    setMembers(prev =>
      prev.map(m =>
        m.id === selectedMember.id
          ? { ...m, blocked: false, status: 'Active' }
          : m
      )
    );
    setUnblockModalOpen(false);
    setSelectedMember(null);
  };
  return (
    <div className="bg-white md:p-6 rounded">
      {/* Title + Search/Add */}
      <div className="flex justify-end items-center mb-4 gap-4 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-2 w-fit md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border pr-10 pl-5 py-2 rounded font-dm font-[400] text-[13px] bg-[#D9D9D9] min-w-[150px]"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-700">
              <LuCrosshair size={17} />
            </span>
          </div>

          <button className="bg-black text-white px-5 py-2 rounded font-dm md:font-[600] md:text-[16px] font-[600] text-[14px] whitespace-nowrap">
            Add User
          </button>
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[850px]">
          {/* Table Head */}
          <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1.6fr] bg-[#C3C2C2]  p-2 rounded text-center font-dm md:font-[500] md:text-[14px] font-[500] text-[10px]">
            <div>Account</div>
            <div>Password</div>
            <div>Balance</div>
            <div>Status</div>
            <div>Agent Number</div>
            <div>Action</div>
          </div>

          {/* Table Body */}
          <div className="space-y-2 mt-2">
            {members.map((m, index) => (
              <div
                key={index}
                className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1.6fr] gap-1 items-center bg-gray-100 rounded p-2  text-center font-dm md:font-[400] md:text-[14px] font-[400] text-[10px]"
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
                <div>{m.agent}</div>
                <div className="flex gap-1 justify-center items-center flex-nowrap">
                  <button className="min-w-[90px] h-[px] bg-blue-500 text-white   px-2 py-1 rounded flex items-center justify-center whitespace-nowrap font-dm md:font-[400] md:text-[12px] font-[400] text-[10px]">
                    <FaUserEdit className="mr-1 md:text-base text-[12px]" />
                    Profile Edit
                  </button>

                  {!m.blocked && (
                    <button
                      onClick={() => handleBlock(m)}
                      className="min-w-[90px] bg-blue-600 text-white px-2 py-1 rounded"
                    >
                      Lock Up
                    </button>
                  )}
                  {m.blocked && (
                    <button
                      onClick={() => handleUnblock(m)}
                      className="min-w-[90px] bg-yellow-500 text-black px-2 py-1 rounded"
                    >
                      Unblock
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
      {/* Modals */}
      <LockConfirmModal
        isOpen={lockModalOpen}
        onClose={() => setLockModalOpen(false)}
        onConfirm={confirmBlock}
        name={selectedMember?.name}
      />
      <UnblockConfirmModal
        isOpen={unblockModalOpen}
        onClose={() => setUnblockModalOpen(false)}
        onConfirm={confirmUnblock}
        name={selectedMember?.name}
      />
    </div>
  );
};

export default MemberList;
