import React, { useState } from 'react';
import {
  FaUserEdit,
  FaPenAlt,
  FaPenNib,
  FaArrowRight,
  FaArrowLeft,
} from 'react-icons/fa';
import { LuCrosshair } from 'react-icons/lu';
import EditAgentModal from '../TorrityModal/EditAgentModal';
import AddTerritoryAgentModal from '../TorrityModal/AddTerritoryAgentModal';
import LockConfirmModal from '../MemberList/LockConfirmModal';
import UnblockConfirmModal from '../MemberList/UnblockConfirmModal';

const TorrityAgentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 10;
  const [members, setMembers] = useState([
    {
      id: 1,
      account: '01773777834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 2,
      account: '01582576489',
      password: 'Test@123',
      balance: '$6,500.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 3,
      account: '01671242567',
      password: 'Agent123',
      balance: '$9,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 4,
      account: '01773642474',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 5,
      account: '015836465489',
      password: 'Test@123',
      balance: '$6,500.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 6,
      account: '016120034567',
      password: 'Agent123',
      balance: '$9,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 7,
      account: '017736777834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 8,
      account: '015826665489',
      password: 'Test@123',
      balance: '$6,500.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 9,
      account: '016713324567',
      password: 'Agent123',
      balance: '$9,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 10,
      account: '01773472834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 11,
      account: '01586265489',
      password: 'Test@123',
      balance: '$6,500.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 12,
      account: '016745234567',
      password: 'Agent123',
      balance: '$9,000.00',
      status: 'Active',
      blocked: false,
    },
  ]);

  const filteredAgents = members.filter(m => m.account.includes(searchTerm));
  const totalPages = Math.ceil(filteredAgents.length / agentsPerPage);
  const startIndex = (currentPage - 1) * agentsPerPage;
  const currentAgents = filteredAgents.slice(
    startIndex,
    startIndex + agentsPerPage
  );

  const [editAgent, setEditAgent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [blockedAgent, setBlockedAgent] = useState(null);
  const [confirmType, setConfirmType] = useState('');

  const [editBalanceId, setEditBalanceId] = useState(null);
  const handleFieldUpdate = (id, field, value) => {
    setMembers(prev =>
      prev.map(m => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  const handleAddAgent = data => {
    console.log('New Territory Agent:', data);
  };

  const handleBlockToggle = (agent, type) => {
    setBlockedAgent(agent);
    setConfirmType(type);
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
    <div className="bg-white rounded">
      <div className="flex justify-end items-center mb-4 gap-4 overflow-x-auto whitespace-nowrap">
        <div className="flex gap-2 w-fit md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="border w-full md:pr-10 pl-2 py-2 rounded font-dm font-[400] text-[16px] bg-[#D9D9D9] min-w-[150px]"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-700">
              <LuCrosshair size={17} />
            </span>
          </div>
          <button
            className="bg-black text-white md:px-5 px-2 py-2 rounded font-dm font-[600] text-[14px]"
            onClick={() => setShowModal(true)}
          >
            Add TeritorryAgent
          </button>
        </div>
      </div>

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
            {currentAgents.map((m, index) => (
              <div
                key={index}
                className="grid grid-cols-[0.8fr_0.8fr_0.8fr_0.9fr_2fr] gap-1 items-center bg-gray-100 rounded px-2 py-2 text-center font-dm text-[10px] md:text-[14px]"
              >
                <div>{m.account}</div>
                <div>{m.password}</div>
                <div
                  className="flex items-center justify-center gap-1 cursor-pointer"
                  onClick={() => setEditBalanceId(m.id)}
                >
                  {editBalanceId === m.id ? (
                    <input
                      type="text"
                      value={m.balance.replace('$', '')}
                      onChange={e =>
                        handleFieldUpdate(m.id, 'balance', `$${e.target.value}`)
                      }
                      onBlur={() => setEditBalanceId(null)}
                      onKeyDown={e => {
                        if (e.key === 'Enter') setEditBalanceId(null);
                      }}
                      className="border w-[70px] text-center px-1 text-[16px] md:text-[14px]"
                      autoFocus
                    />
                  ) : (
                    <span>{m.balance}</span>
                  )}
                  <FaPenNib className="text-gray-600 md:text-[13px] text-[12px] cursor-pointer ml-1" />
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
                <div className="flex gap-1 justify-center items-center flex-wrap px-10">
                  <button
                    className="min-w-[90px] bg-blue-500 text-white px-2 py-1 rounded flex items-center justify-center"
                    onClick={() => setEditAgent(m)}
                  >
                    <FaUserEdit className="mr-1 md:text-base text-[10px]" />
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

      {/* Pagination */}
      <div className="flex justify-end mt-10 gap-2 items-center">
        <button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 text-[12px] rounded bg-gray-200 disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-2 text-[11px] rounded ${
              page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 text-[12px] rounded bg-gray-200 disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>

      {editAgent && (
        <EditAgentModal
          agent={editAgent}
          onClose={() => setEditAgent(null)}
          onUpdate={(id, field, value) => {
            // update logic
          }}
          onDelete={id => {
            setEditAgent(null);
          }}
        />
      )}

      <AddTerritoryAgentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleAddAgent}
      />

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

export default TorrityAgentList;
