import React, { useState } from 'react';
import { FaUserEdit, FaPenAlt, FaPenNib } from 'react-icons/fa';
import { LuCrosshair } from 'react-icons/lu';
import LockConfirmModal from '../MemberList/LockConfirmModal';
import UnblockConfirmModal from '../MemberList/UnblockConfirmModal';

const MasterAgentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [blockedAgent, setBlockedAgent] = useState(null);
  const [confirmType, setConfirmType] = useState('');
  const [members, setMembers] = useState([
    {
      account: '01773647834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      account: '01811223344',
      password: 'Test@123',
      balance: '$8,000.00',
      status: 'Active',
      blocked: false,
    },
  ]);

  const filteredMembers = members.filter(m => m.account.includes(searchTerm));

  const handleBlockToggle = (agent, type) => {
    setBlockedAgent(agent);
    setConfirmType(type); // block / unblock
  };

  const confirmBlockToggle = () => {
    const updated = members.map(m =>
      m.account === blockedAgent.account
        ? {
            ...m,
            blocked: confirmType === 'block',
            status: confirmType === 'block' ? 'Blocked' : 'Active',
          }
        : m
    );
    setMembers(updated);
    setBlockedAgent(null);
  };

  return (
    <div className="bg-white md:p-6 rounded">
      <div className="flex justify-end items-center mb-4 gap-4 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-2 w-fit md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="border pr-7 md:pr-10 pl-5 py-2 rounded font-dm font-[400] text-[16px] bg-[#D9D9D9] min-w-[150px]"
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

      {/* Table */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[850px]">
          <div className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.8fr_2fr] bg-[#C3C2C2] p-2 rounded text-center font-dm text-[10px] md:text-[14px] font-[500]">
            <div>ID</div>
            <div>Password</div>
            <div>Balance</div>
            <div>Status</div>
            <div className="px-10">Action</div>
          </div>

          <div className="space-y-2 mt-2">
            {filteredMembers.map((m, index) => (
              <div
                key={index}
                className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.9fr_2fr] gap-1 items-center bg-gray-100 rounded px-2 py-2 text-center font-dm text-[10px] md:text-[14px]"
              >
                <div>{m.account}</div>
                <div>{m.password}</div>
                <div className="flex items-center justify-center gap-1">
                  {m.balance}
                  <FaPenNib className="text-gray-600 text-[9px] md:text-sm cursor-pointer ml-1" />
                </div>
                <div>
                  <span
                    className={`px-2 py-0.5 rounded text-white text-[10px] md:text-xs ${
                      m.status === 'Active' ? 'bg-green-600' : 'bg-[#FDAC29]'
                    }`}
                  >
                    {m.status}
                  </span>
                </div>
                <div className="flex gap-2 justify-center items-center px-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
                  <button className="min-w-[90px] bg-blue-500 text-white px-2 py-1 rounded flex items-center justify-center">
                    <FaUserEdit className="mr-1" />
                    Profile Edit
                  </button>

                  <button
                    className={`min-w-[90px] ${
                      m.blocked ? 'bg-[#FDAC29]' : 'bg-blue-600'
                    } text-white px-2 py-1 rounded flex items-center justify-center`}
                    onClick={() =>
                      handleBlockToggle(m, m.blocked ? 'unblock' : 'block')
                    }
                  >
                    <FaPenAlt className="mr-1" />
                    {m.blocked ? 'Unblock' : 'Lock Up'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confirm Modals */}
      {blockedAgent && confirmType === 'block' && (
        <LockConfirmModal
          isOpen={true}
          onClose={() => setBlockedAgent(null)}
          onConfirm={confirmBlockToggle}
          name={blockedAgent.account}
        />
      )}
      <UnblockConfirmModal
        isOpen={!!(blockedAgent && confirmType === 'unblock')}
        onClose={() => setBlockedAgent(null)}
        onConfirm={confirmBlockToggle}
        name={blockedAgent?.account}
      />
    </div>
  );
};

export default MasterAgentList;
