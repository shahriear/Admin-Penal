import React, { useState } from 'react';
import { FaUserEdit, FaPenAlt, FaPenNib } from 'react-icons/fa';
import { LuCrosshair } from 'react-icons/lu';
import EditAgentModal from '../TorrityModal/EditAgentModal';
import AddTerritoryAgentModal from '../TorrityModal/AddTerritoryAgentModal';

const TorrityAgentList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 10;
  const [members, setMembers] = useState([
    {
      id: 1,
      account: '01773647834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 2,
      account: '01582365489',
      password: 'Test@123',
      balance: '$6,500.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 3,
      account: '01671234567',
      password: 'Agent123',
      balance: '$9,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 4,
      account: '01773647834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 5,
      account: '01582365489',
      password: 'Test@123',
      balance: '$6,500.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 6,
      account: '01671234567',
      password: 'Agent123',
      balance: '$9,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 7,
      account: '01773647834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 8,
      account: '01582365489',
      password: 'Test@123',
      balance: '$6,500.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 9,
      account: '01671234567',
      password: 'Agent123',
      balance: '$9,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 10,
      account: '01773647834',
      password: '@#boomST25@#',
      balance: '$12,000.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 11,
      account: '01582365489',
      password: 'Test@123',
      balance: '$6,500.00',
      status: 'Active',
      blocked: false,
    },
    {
      id: 12,
      account: '01671234567',
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

  const handleAddAgent = data => {
    console.log('New Territory Agent:', data);
    // Push or API call
  };

  const handleBlockToggle = (agent, type) => {
    setBlockedAgent(agent);
    setConfirmType(type);
  };

  const confirmBlockToggle = () => {
    if (!blockedAgent) return;
    const updated = members.map(m =>
      m.id === blockedAgent.id
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
              className="border pr-1 md:pr-10 pl-2 py-2 rounded font-dm font-[400] text-[16px] bg-[#D9D9D9] min-w-[150px]"
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
                <div className="flex items-center justify-center gap-1">
                  {m.balance}
                  <FaPenNib className="text-gray-600 text-[9px] md:text-sm cursor-pointer ml-1" />
                </div>
                <div>
                  <span
                    className={`px-2 py-0.5 rounded text-white text-[10px] md:text-xs ${
                      m.status === 'Active' ? 'bg-green-600' : 'bg-red-600'
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
                    <FaUserEdit className="mr-1 md:text-base text-[10px]" />{' '}
                    Profile Edit
                  </button>
                  <button
                    className={`min-w-[90px] ${
                      m.blocked ? 'bg-green-600' : 'bg-blue-600'
                    } text-white px-2 py-1 rounded flex items-center justify-center`}
                    onClick={() =>
                      handleBlockToggle(m, m.blocked ? 'unblock' : 'block')
                    }
                  >
                    <FaPenAlt className="mr-1 md:text-sm" />{' '}
                    {m.blocked ? 'Unblock' : 'Lock Up'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6 mb-4 pr-4">
        <div className="flex items-center gap-2 font-semibold">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 text-lg"
          >
            ←
          </button>
          <span className="text-sm text-gray-700">
            {currentPage.toString().padStart(2, '0')}
          </span>
          <button
            onClick={() =>
              setCurrentPage(prev => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-lg"
          >
            →
          </button>
        </div>
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

      {blockedAgent && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to{' '}
              {confirmType === 'block' ? 'Block' : 'Unblock'} this agent?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setBlockedAgent(null)}
                className="px-4 py-2 bg-gray-300 rounded text-sm"
              >
                Cancel
              </button>
              <button
                onClick={confirmBlockToggle}
                className={`px-4 py-2 rounded text-sm text-white ${
                  confirmType === 'block' ? 'bg-red-600' : 'bg-green-600'
                }`}
              >
                {confirmType === 'block' ? 'Block' : 'Unblock'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TorrityAgentList;
